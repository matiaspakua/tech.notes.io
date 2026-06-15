# Navegación — Base de Conocimiento

## Estructura de navegación

Todas las páginas en `pages/` están organizadas jerárquicamente y tienen navegación bidireccional:

```
pages/
├── sw_eng_specialization/
│   ├── ingenieria_requisitos/
│   │   ├── sesion_1.md          ← [vuelve a sesion_2]
│   │   ├── sesion_2.md          ← (página padre con índice)
│   │   └── software_requirements.md ← [vuelve a sesion_2]
│   ├── software_planning/
│   └── software_modeling/
├── master_ti/
│   ├── seguridad_informatica/
│   ├── cloud_computing/
│   └── transformacion_digital/
└── ...
```

## Convención de navegación

### Páginas PADRE (nivel principal del directorio)

Contienen sección **"## Índice de temas"** que lista todas las páginas hijas:

```markdown
## Índice de temas

- [Sesion 1](sesion_1)
- [Requerimientos de Software](software_requirements)
```

### Páginas HIJA (dentro de subdirectorio)

Tienen link de vuelta a la página padre en el encabezado:

```markdown
[← El proceso de la Ingeniería de Requerimientos](sesion_2)
```

También mantienen el link a inicio:

```markdown
[← Inicio](https://matiaspakua.github.io/tech.notes.io)
```

## Mantenimiento automático

### Ejecutar actualización

Cuando se agregan nuevas notas en directorios anidados, ejecutar:

```bash
python3 scripts/update_navigation.py
```

El script:
- ✅ Identifica directorios con múltiples archivos `.md`
- ✅ Agrega/actualiza índices en páginas padre
- ✅ Agrega links de vuelta en páginas hija
- ✅ NO duplica ni sobrescribe existentes

### Flujo de trabajo sugerido

1. Crear nueva nota en directorio anidado
2. Ejecutar `scripts/update_navigation.py`
3. Verificar que aparezca en el índice
4. Commitear cambios

## Casos especiales

### Directorios con múltiples niveles

Si hay directorios `master_direccion_tecnologica/01_gestion_empresarial/sesion_1/`, cada nivel forma parte de la navegación independientemente.

### Landing pages

Los archivos `landing.md` funcionan como índices alternativos y se incluyen automáticamente en el índice de su directorio padre.

## Notas para desarrollo

- El script está escrito en Python 3
- Usa `Path` de `pathlib` para portabilidad (Linux/macOS/Windows)
- Preserva frontmatter YAML de las notas
- No modifica contenido, solo agrega navegación
- Idempotente: puede ejecutarse múltiples veces sin efecto

## Referencia: Directorios procesados

- `artificial_intelligence/prompts/` (3 notas)
- `artificial_intelligence/ruta_de_aprendisaje/` (5 notas)
- `sw_eng_specialization/software_*` (4 directorios)
- `master_direccion_tecnologica/*` (11 módulos, 92 notas)
- `master_ti/*` (3 módulos, 20 notas)

**Total:** 25 directorios, 122 archivos con navegación bidireccional garantizada.
