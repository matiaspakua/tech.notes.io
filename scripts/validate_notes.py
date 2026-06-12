#!/usr/bin/env python3
"""Validador determinista de notas para tech.notes.io.

Forma parte del "pre-validation content fixer": chequeos rápidos y sin IA que
verifican que las notas de pages/ siguen el template y no tienen errores
estructurales graves. El fix profundo de contenido/estilo lo hace la skill
note-content-fixer (vía la GitHub Action que abre una PR de revisión).

Uso:
    python3 scripts/validate_notes.py                 # valida todo pages/
    python3 scripts/validate_notes.py pages/a.md ...  # valida archivos dados

Códigos de salida:
    0  sin errores graves (puede haber warnings)
    1  hay errores graves (links rotos, frontmatter ausente, etc.)
"""
from __future__ import annotations

import os
import re
import sys

PAGES_DIR = "pages"
HOME_LINK = "https://matiaspakua.github.io/tech.notes.io"

GENERIC_TITLES = {
    "introduction", "introduccion", "introducción", "referencias",
    "references", "index", "untitled", "all videos", "nota", "notas",
}


def repo_files() -> set[str]:
    found: set[str] = set()
    for root, _dirs, files in os.walk("."):
        if ".git" in root:
            continue
        for f in files:
            found.add(os.path.normpath(os.path.join(root, f)))
    return found


def split_frontmatter(content: str) -> tuple[str, str]:
    m = re.match(r"^---\n.*?\n---\n", content, re.DOTALL)
    if m:
        return m.group(0), content[m.end():]
    return "", content


def validate_file(path: str, all_files: set[str]) -> tuple[list[str], list[str]]:
    errors: list[str] = []
    warnings: list[str] = []
    with open(path, encoding="utf-8", errors="ignore") as fh:
        content = fh.read()

    fm, body = split_frontmatter(content)

    # --- frontmatter ---
    if not fm:
        errors.append("falta frontmatter YAML (--- ... ---)")
    else:
        tm = re.search(r'^title:\s*"?(.+?)"?\s*$', fm, re.MULTILINE)
        if not tm:
            errors.append("frontmatter sin 'title'")
        elif tm.group(1).strip().lower() in GENERIC_TITLES:
            warnings.append(f"title genérico/poco descriptivo: '{tm.group(1)}'")
        if not re.search(r"^tags:", fm, re.MULTILINE):
            warnings.append("frontmatter sin 'tags'")
        elif "notas" not in fm:
            warnings.append("falta el tag base 'notas'")

    # --- H1 ---
    if not re.search(r"^#\s+\S", body, re.MULTILINE):
        warnings.append("no hay un '# H1' en el cuerpo")

    # --- legacy HTML ---
    if 'class="back-button"' in body:
        errors.append("contiene <button class=\"back-button\"> legacy "
                      f"(reemplazar por '[← Inicio]({HOME_LINK})')")
    if re.search(r"<a\s+name=", body, re.IGNORECASE):
        warnings.append("contiene anclas HTML <a name=...> (eliminar)")

    # --- ← Inicio link ---
    if HOME_LINK not in body:
        warnings.append("falta el link '[← Inicio](...)'")

    # --- broken internal .md links ---
    src_dir = os.path.dirname(path)
    for lm in re.finditer(r"\]\(([^)]+\.md)(?:#[^)]*)?\)", body):
        link = lm.group(1)
        if link.startswith("http"):
            continue
        clean = link.replace("%20", " ")
        if clean.startswith("/"):
            target = os.path.normpath("." + clean)
        else:
            target = os.path.normpath(os.path.join(src_dir, clean))
        if target not in all_files:
            errors.append(f"link interno roto: {link}")

    return errors, warnings


def main(argv: list[str]) -> int:
    all_files = repo_files()

    if argv:
        targets = [p for p in argv if p.endswith(".md") and os.path.isfile(p)]
    else:
        targets = []
        for root, _dirs, files in os.walk(PAGES_DIR):
            for f in sorted(files):
                if f.endswith(".md"):
                    targets.append(os.path.join(root, f))

    total_err = 0
    total_warn = 0
    for path in sorted(targets):
        errors, warnings = validate_file(path, all_files)
        if errors or warnings:
            rel = os.path.relpath(path)
            print(f"\n{rel}")
            for e in errors:
                print(f"  ✗ ERROR   {e}")
            for w in warnings:
                print(f"  ⚠ WARN    {w}")
        total_err += len(errors)
        total_warn += len(warnings)

    print(f"\n{'='*50}")
    print(f"Notas revisadas: {len(targets)} | errores: {total_err} | "
          f"warnings: {total_warn}")
    return 1 if total_err else 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
