# 🚀 Guía Paso a Paso: Instalación y Uso de Graphify Labs

Este documento contiene las instrucciones listas para **copiar y pegar** para instalar, configurar e integrar **Graphify** en cualquier repositorio o proyecto.

---

## 1. Requisitos Previos

Asegúrate de contar con Python 3.9+ e instalador de herramientas CLI (`uv`, `pipx` o `pip`).

---

## 2. Instalación de Graphify (Copiar y Pegar)

> ⚠️ **Atención:** El paquete en PyPI se llama **`graphifyy`** (con dos 'y'), aunque el comando ejecutable resultante en la terminal es `graphify`.

Elige **una** de las siguientes opciones de instalación:

### Opción A: Con `uv` (Recomendado - Ultrarrápido)
```bash
uv tool install graphifyy
```

### Opción B: Con `pipx`
```bash
pipx install graphifyy
```

### Opción C: Con `pip` tradicional
```bash
pip install graphifyy
```

---

## 3. Generar el Grafo de Conocimiento de un Proyecto

Navega a la carpeta raíz de tu repositorio y ejecuta:

### Caso 1: Escaneo basado en AST local (Gratis, sin API Keys)
Ideal para código fuente puro (JS, TS, Go, Python, Java, Rust, C++, etc.):
```bash
graphify . --code-only
```

### Caso 2: Escaneo completo con extracción semántica LLM (Documentos + Código)
Si deseas extraer además la semántica de PDFs, imágenes y documentación Markdown, exporta tu API Key e inicia el escaneo:
```bash
export GOOGLE_API_KEY="tu_api_key_aqui"
# O bien: export OPENAI_API_KEY="tu_api_key_aqui"

graphify .
```

---

## 4. Agrupar y Generar los Reportes Visuales

Una vez extraído el mapa inicial, ejecuta el siguiente comando para generar los archivos HTML e informes:

```bash
graphify cluster-only .
```

Esto generará automáticamente la carpeta **`graphify-out/`** con los siguientes archivos:
- 📊 **`graphify-out/graph.html`**: Visualización interactiva web del mapa de tu código.
- 📋 **`graphify-out/GRAPH_REPORT.md`**: Reporte en Markdown con la síntesis de módulos y dependencias.
- 📄 **`graphify-out/graph.json`**: Datos estructurados en formato JSON.

---

## 5. Integración con Asistentes de IA (Claude Code, Cursor, Copilot)

Para registrar Graphify como un Skill/Herramienta de contexto para tu agente de IA:

```bash
graphify install
```

Luego, dentro del chat de tu asistente de IA (como Claude Code), puedes invocarlo con:
```text
/graphify .
```

---

## 6. Comandos Frecuentes del CLI (Consultas)

```bash
# Realizar una consulta en lenguaje natural sobre la arquitectura
graphify query "¿Cómo interactúa la autenticación con la base de datos?"

# Encontrar el camino más corto entre dos componentes o clases
graphify path "AuthService" "UserRepository"

# Explicar la responsabilidad de un archivo o nodo
graphify explain "src/App.tsx"

# Actualizar el grafo (sólo escanea archivos modificados desde el último git commit)
graphify update

# Instalar hook automático en Git para actualizar el grafo en cada commit
graphify hook install
```

---

## 7. Integración con Proyectos Web (Node.js / React)

Si deseas actualizar el grafo de tu proyecto web y copiarlo a tu carpeta de activos públicos (`public/`) para verlo en un navegador o iFrame:

### Copiar manualmente el HTML generado a `public/`:
```bash
cp graphify-out/graph.html public/graph.html
```

### Añadir como script en tu `package.json`:
```json
"scripts": {
  "graphify": "graphify . --code-only && graphify cluster-only . && cp graphify-out/graph.html public/graph.html"
}
```

Luego podrás ejecutar en cualquier momento:
```bash
npm run graphify
```
