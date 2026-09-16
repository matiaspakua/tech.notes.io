#!/usr/bin/env bash
# render.sh - Render one or more .puml files to an image format, working around
# the environment differences (Linux/macOS/WSL2, PlantUML installed vs not,
# Graphviz installed vs not) that show up across the machines this skill runs on.
#
# Usage:
#   render.sh <input.puml> [format] [output-dir]
#   render.sh <input-dir>  [format] [output-dir]
#
#   format:      svg (default) | png | pdf | txt | latex
#   output-dir:  defaults to the input file's own directory
#
# Exit codes:
#   0  - rendered with no errors detected
#   1  - PlantUML (or Graphviz) could not be located/installed
#   2  - the .puml source has a syntax error (see stderr for the line)
#
# Why this script exists instead of inlining the logic in SKILL.md: locating a
# working PlantUML+Graphviz pair, and recovering when one is missing, takes
# ~15 branchy shell steps. Doing that once here keeps SKILL.md focused on the
# diagram language itself rather than on installer trivia, and makes the
# fallback behavior (see below) consistent and testable across runs.

set -uo pipefail

INPUT="${1:?Usage: render.sh <input.puml|dir> [format] [output-dir]}"
FORMAT="${2:-svg}"
OUTDIR="${3:-}"

log() { echo "[render.sh] $*" >&2; }

# ---------------------------------------------------------------------------
# 1. Locate a working `plantuml` invocation, installing it if we reasonably can.
#    PlantUML is "just a jar" (plus a JVM), so once we find java+jar anywhere
#    on the box we're done - no need to insist on the `plantuml` wrapper script.
# ---------------------------------------------------------------------------
find_plantuml() {
  if command -v plantuml >/dev/null 2>&1; then
    echo "plantuml"
    return 0
  fi
  local jar
  for jar in /usr/share/plantuml/plantuml.jar \
             /usr/share/java/plantuml.jar \
             /usr/local/opt/plantuml/libexec/plantuml.jar \
             /opt/homebrew/opt/plantuml/libexec/plantuml.jar \
             /opt/plantuml/plantuml.jar \
             "$HOME/plantuml.jar" \
             "$HOME/.plantuml/plantuml.jar"; do
    if [ -f "$jar" ] && command -v java >/dev/null 2>&1; then
      echo "java -jar $jar"
      return 0
    fi
  done
  return 1
}

install_plantuml() {
  log "plantuml not found on this machine - attempting to install it."
  if command -v brew >/dev/null 2>&1; then
    log "Using Homebrew (macOS)."
    brew install plantuml >&2 && return 0
  fi
  if command -v apt-get >/dev/null 2>&1; then
    log "Using apt-get (Debian/Ubuntu). This also pulls in a JRE and Graphviz."
    if [ "$(id -u)" = "0" ]; then
      apt-get update -qq >&2 && apt-get install -y plantuml >&2 && return 0
    elif command -v sudo >/dev/null 2>&1; then
      sudo apt-get update -qq >&2 && sudo apt-get install -y plantuml >&2 && return 0
    fi
  fi
  if command -v choco >/dev/null 2>&1; then
    log "Using Chocolatey (Windows)."
    choco install -y plantuml >&2 && return 0
  fi
  return 1
}

PLANTUML_CMD="$(find_plantuml || true)"
if [ -z "$PLANTUML_CMD" ]; then
  if install_plantuml; then
    PLANTUML_CMD="$(find_plantuml || true)"
  fi
fi

if [ -z "$PLANTUML_CMD" ]; then
  log "Could not find or install PlantUML."
  log "Options: install a JRE + https://plantuml.com/download, 'brew install plantuml', 'apt-get install plantuml',"
  log "or render the .puml source at https://www.plantuml.com/plantuml/uml/ (paste the file contents)."
  exit 1
fi
log "Using: $PLANTUML_CMD"

# ---------------------------------------------------------------------------
# 2. Check for Graphviz. It's only required for the diagram types that need
#    an automatic graph layout (class, object, component, deployment, usecase,
#    archimate...). Sequence, activity (beta), state (new), mindmap, WBS,
#    Gantt, JSON/YAML and salt/wireframe diagrams use PlantUML's own layout
#    and render fine without it.
#
#    If Graphviz is missing and can't be installed, we fall back to
#    `-Playout=smetana`, PlantUML's built-in pure-Java layout engine. It
#    needs no external dependency but lays out large/dense graphs less neatly
#    than Graphviz's `dot` - worth knowing if a rendered diagram looks
#    cramped and Graphviz is absent.
# ---------------------------------------------------------------------------
LAYOUT_FLAG=""
if ! command -v dot >/dev/null 2>&1; then
  log "Graphviz (dot) not found - attempting to install it (needed for class/component/deployment/etc. diagrams)."
  if command -v brew >/dev/null 2>&1; then
    brew install graphviz >&2 || true
  elif command -v apt-get >/dev/null 2>&1; then
    if [ "$(id -u)" = "0" ]; then
      apt-get install -y graphviz >&2 || true
    elif command -v sudo >/dev/null 2>&1; then
      sudo apt-get install -y graphviz >&2 || true
    fi
  fi
  if ! command -v dot >/dev/null 2>&1; then
    log "Graphviz still unavailable - falling back to the smetana (pure Java) layout engine."
    LAYOUT_FLAG="-Playout=smetana"
  fi
fi

# ---------------------------------------------------------------------------
# 3. Collect input files.
# ---------------------------------------------------------------------------
FILES=()
if [ -d "$INPUT" ]; then
  while IFS= read -r -d '' f; do FILES+=("$f"); done < <(find "$INPUT" -maxdepth 1 -name '*.puml' -print0)
elif [ -f "$INPUT" ]; then
  FILES=("$INPUT")
else
  log "No such file or directory: $INPUT"
  exit 1
fi
if [ "${#FILES[@]}" -eq 0 ]; then
  log "No .puml files found under $INPUT"
  exit 1
fi

case "$FORMAT" in
  svg)   FMT_FLAG="-tsvg" ;;
  png)   FMT_FLAG="-tpng" ;;
  pdf)   FMT_FLAG="-tpdf" ;;
  txt)   FMT_FLAG="-ttxt" ;;
  latex) FMT_FLAG="-tlatex" ;;
  *) log "Unknown format '$FORMAT' (use svg, png, pdf, txt, or latex)"; exit 1 ;;
esac

OUT_FLAG=()
if [ -n "$OUTDIR" ]; then
  mkdir -p "$OUTDIR"
  OUT_FLAG=(-o "$(cd "$OUTDIR" && pwd)")
fi

# ---------------------------------------------------------------------------
# 4. Render. IMPORTANT: PlantUML almost always exits 0, even when a diagram
#    has a syntax error - it "renders" the error as a picture of the broken
#    line instead of failing the process. So success is judged by scanning
#    stdout/stderr for "Error", not by the exit code.
# ---------------------------------------------------------------------------
HAD_ERROR=0
for f in "${FILES[@]}"; do
  log "Rendering $f -> $FORMAT"
  OUTPUT=$($PLANTUML_CMD $LAYOUT_FLAG $FMT_FLAG "${OUT_FLAG[@]}" "$f" 2>&1)
  echo "$OUTPUT" >&2
  if echo "$OUTPUT" | grep -qi "error"; then
    log "Syntax error detected in $f - the rendered image marks the offending line, but fix the source before delivering it."
    HAD_ERROR=1
  fi
done

if [ "$HAD_ERROR" -eq 1 ]; then
  exit 2
fi
log "Done."
exit 0