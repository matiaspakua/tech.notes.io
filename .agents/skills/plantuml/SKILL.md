---
name: plantuml
description: Generate PlantUML diagrams — class, sequence, use case, activity, state, component, deployment, object, entity-relationship/data-model, C4 model (context/container/component/dynamic/deployment), timing, mindmap, WBS, Gantt, network, ArchiMate, JSON/YAML, and wireframe (salt) diagrams — for software architecture, system design, and documenting complex codebases. Use whenever asked to create, draw, sketch, generate, or update a UML diagram, architecture diagram, sequence diagram, class diagram, ER/data-model diagram, deployment diagram, component diagram, C4 diagram, state machine, or any software-engineering diagram, or when PlantUML, .puml files, or "UML diagram" comes up — even without saying "PlantUML" by name, just describing wanting a diagram of code, architecture, API flow, or a database schema. Also use to render an existing .puml file to SVG/PNG/PDF, or to debug broken PlantUML syntax.
---

# PlantUML diagram generation

Generate diagrams as PlantUML source (`.puml`), then render them to an image.
PlantUML is a plain-text diagramming language — every diagram is code, which
is exactly why it fits software projects well: diagrams live in version
control next to the system they describe, and can be regenerated instead of
manually redrawn every time the design changes.

## Workflow

1. **Figure out which diagram type(s) actually answer the user's question.**
   "Diagram the architecture" is underspecified — a request to see how
   systems talk to each other needs a different diagram than a request to
   see a class hierarchy or a request to see what happens during one API
   call. See the decision guide below, or the fuller one in
   `references/diagram-types.md`. For a non-trivial system, plan a *set* of
   diagrams rather than forcing everything into one (see "Documenting a real
   project" below) — say which diagrams you're producing and why before
   writing them.
2. **Write the `.puml` source directly** with the Write tool. Look up the
   skeleton for the chosen diagram type in `references/diagram-types.md`
   rather than guessing at syntax from memory — PlantUML has a lot of
   diagram-specific vocabulary and getting the element keywords right the
   first time avoids a debug round-trip. For C4 or cloud-icon diagrams, check
   `references/stdlib-and-icons.md` for the right `!include` path.
3. **Render it**: `scripts/render.sh <file.puml> <format> <output-dir>`
   (format: `svg` default, or `png`/`pdf`/`txt`/`latex`). The script finds or
   installs PlantUML and Graphviz, picks a working layout engine, and
   reports syntax errors — see "Rendering" below for what its exit codes
   mean and how to react to them.
4. **Verify before delivering.** A syntax error still produces an image (of
   the broken line) and exits 0 from PlantUML's own perspective — trust
   `render.sh`'s exit code (2 means fix the source), not just "a file got
   written". For anything non-trivial, look at the rendered image yourself
   (Read tool on the SVG/PNG, or view the PNG) to confirm the layout actually
   communicates what was intended before calling it done.
5. **Deliver both the `.puml` source and the rendered image.** The source is
   what belongs in the project's repo (diagrams-as-code); the image is what's
   immediately useful to look at. Follow the project's existing diagram
   conventions if it has any (e.g. a `docs/.../diagrams/` folder) rather than
   dropping files wherever is convenient.

## Choosing a diagram type

| Question being answered | Diagram type |
|---|---|
| What systems/services exist and how do they talk? | C4 Context or Container |
| What's inside one service/module? | C4 Component, or Component diagram |
| What classes/entities exist and how do they relate? | Class diagram |
| What does the database schema look like? | Entity-relationship diagram |
| What happens step by step during one call/flow? | Sequence diagram |
| What states can this entity be in, and how does it transition? | State diagram |
| What's the business process / user workflow? | Activity diagram |
| Who can do what in the system? | Use case diagram |
| How is this deployed (servers, containers, network)? | Deployment diagram |
| How is the project/roadmap timed out? | Gantt chart |
| Let's brainstorm or break down a topic | Mindmap or WBS |

Full skeletons, arrow/keyword references, and less common types (timing,
network, ArchiMate, JSON/YAML, salt wireframes) are in
`references/diagram-types.md` — read the relevant section before writing the
diagram, don't rely on recalling exact PlantUML syntax from memory.

## Documenting a real project

When the ask is bigger than one picture — "document the architecture",
"diagram this codebase" — resist the urge to cram everything into a single
diagram. A useful documentation set for a typical backend+frontend+database
project looks like:

- One **C4 Context** diagram (external actors and systems)
- One **C4 Container** diagram (the deployable pieces: web app, API,
  database, queues, external services)
- One **Component** or **C4 Component** diagram per non-trivial container
- One **class diagram** per bounded context/domain area (not one giant
  diagram of every class in the codebase)
- One **ER diagram** for the data model
- One **sequence diagram** per critical or non-obvious flow (auth, payment,
  anything with retries/async steps)
- One **deployment diagram** for the infrastructure topology

Producing all of these unprompted is usually overkill for a quick question —
match the number of diagrams to what was actually asked for, but keep this
shape in mind as the target when a request is genuinely "document the whole
architecture." Reference `references/preprocessing.md` if the same shape
(e.g. one box per microservice) repeats enough times to be worth a macro
instead of copy-paste.

## Rendering

```bash
scripts/render.sh path/to/diagram.puml svg path/to/output-dir
```

What it does, and why it's a script rather than inline `plantuml` calls:
locating a working PlantUML (it's just a JVM + a jar — the `plantuml`
command isn't guaranteed to exist even when PlantUML is "installed"),
falling back gracefully when Graphviz is missing (needed for class/
component/deployment/etc. diagrams but not sequence/state/mindmap/Gantt/
JSON), and correctly detecting syntax errors (PlantUML exits `0` even on a
broken diagram — it renders a picture of the error instead of failing) all
take real branching logic. Doing it once in the script keeps that
environment-detection noise out of every diagram you generate.

Exit codes:
- **0** — rendered cleanly.
- **1** — couldn't find or install PlantUML/Java. Tell the user what's
  missing; don't try to hand-roll a workaround (e.g. don't attempt to render
  via some other tool) without checking in.
- **2** — the `.puml` source has a syntax error. The script's stderr
  includes the offending line number — fix the source and re-run rather than
  delivering the broken render.

If a project already has PlantUML set up (a Maven/Gradle plugin, a
`docker-compose` service, a VS Code extension config) prefer using what's
already there over installing something new — check for that before running
`render.sh`, which will otherwise install its own copy.

## Syntax fundamentals (apply to every diagram type)

- Every diagram is `@start<kind> ... @end<kind>`; most types use
  `@startuml`/`@enduml` — the diagram *content* (not the delimiter) is what
  determines whether it renders as a class diagram, sequence diagram, etc.
  Exceptions with their own delimiters: mindmap, WBS, Gantt, JSON, YAML,
  salt (wireframe) — see `references/diagram-types.md`.
- `' this is a comment` (single quote) or `/' block comment '/`.
- Quote any label containing spaces or special characters:
  `participant "REST Controller" as C`.
- `hide empty members`, `hide circle` and similar `hide`/`show` directives
  trim visual noise on large class/state diagrams — use them before adding
  more `skinparam` tweaks.

For styling, layout direction, themes, notes/legends, and splitting up
diagrams that have gotten too big, see `references/styling-and-layout.md`.
For variables, conditionals, loops, and reusable macros (only worth it when
there's real repetition to eliminate), see `references/preprocessing.md`.

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| Rendered image shows red text / a highlighted broken line | Syntax error | Read the line `render.sh` reports; check the element's skeleton in `references/diagram-types.md` |
| `!include <C4/...>` (or another stdlib path) fails to resolve | That library isn't bundled in the installed PlantUML version | Run `plantuml -stdlib` to see what's actually available; see `references/stdlib-and-icons.md` for fallbacks |
| Diagram renders but looks like a tangled mess | Too many elements in one diagram, or wrong layout direction | Split the diagram (see "Documenting a real project"), try `left to right direction`, or add `skinparam linetype ortho` |
| `render.sh` exits 1, "could not find or install PlantUML" | No Java, and no package manager available to install one | Tell the user; suggest they render the `.puml` source at https://www.plantuml.com/plantuml/uml/ (paste the file contents) if a browser is available to them |
| Diagram looks fine locally but description says Graphviz is missing | `render.sh` fell back to the `smetana` pure-Java layout engine | Cosmetic only — install Graphviz (`apt-get install graphviz` / `brew install graphviz`) for tighter layouts on dense diagrams if it matters |
| Two elements with the same name collide / relationships point to the wrong thing | Reused a short alias across unrelated elements | Give every element a distinct `as alias`, especially in generated/looped diagrams |