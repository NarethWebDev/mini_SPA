# Reglamento del Aprendiz SENA

## Propósito de la aplicación

Esta aplicación es una **SPA desarrollada con React + Vite y TailwindCSS** cuyo objetivo es **visualizar, gestionar y controlar el cumplimiento de normas del Reglamento del Aprendiz SENA**.

Permite:

* Visualizar normas por categoría.
* Buscar normas por texto.
* Marcar normas como cumplidas.
* Contar cuántas normas han sido cumplidas.
* Crear nuevas normas dinámicamente.

---

## ▶ Instalación y ejecución

### Requisitos

* Node.js (v18 o superior recomendado)
* npm o yarn

### Pasos

```bash
# Clonar el repositorio
git clone <https://github.com/NarethWebDev/mini_SPA.git>

# Entrar al proyecto
cd mini-SPA

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

La aplicación se ejecutará en:

```
http://localhost:5173
```

---

## Arquitectura del proyecto

La aplicación sigue una **arquitectura basada en componentes**, separando responsabilidades para mejorar la mantenibilidad y reutilización.

### Componentes base

#### Header

* Muestra el título de la aplicación.
* Contiene la navegación interna (Normas, Creación, Contacto).

#### SearchBar

* Permite buscar normas por texto o categoría.
* Emite el texto de búsqueda al componente padre mediante props.

#### RuleList

* Recibe el listado de normas filtradas.
* Renderiza dinámicamente los componentes `RuleCard`.

#### RuleCard

* Representa una norma individual.
* Permite marcarla como cumplida o eliminarla.
* Maneja estado local para el estado de cumplimiento.

---

### Componentes agregados

#### RuleForm (Componente nuevo)

* Permite crear nuevas normas.
* Maneja estado local para el formulario.
* Actualiza la lista de normas usando `setRules`.

#### CategoryFilter (Componente nuevo)

* Permite filtrar normas por categoría.
* Centraliza el filtrado por tipo de norma.

#### CounterDisplay (Componente nuevo)

* Muestra el número total de normas cumplidas.
* Refuerza el feedback visual al usuario.

#### Footer (Componente nuevo)

* Muestra información de contacto.
* Cierra la estructura visual de la aplicación.

---

## Uso de props, estado y eventos

### Estado (useState)

* `rules`: lista principal de normas.
* `searchText`: texto de búsqueda.
* `category`: categoría seleccionada.
* `completedCount`: contador de normas cumplidas.

Cada formulario y componente interactivo maneja su **estado local** cuando es necesario (por ejemplo, `RuleCard` y `RuleForm`).

---

### Props

Se utilizan props para:

* Pasar datos (`rules`, `count`, `category`).
* Pasar funciones (`onToggle`, `onDelete`, `onSearch`, `onSelect`).

Esto permite una **comunicación clara de padre a hijo**, manteniendo el estado global en `App.jsx`.

---

### Eventos

* `onClick`: marcar norma como cumplida o eliminarla.
* `onChange`: búsqueda, filtros y formularios.
* `onSubmit`: creación de nuevas normas.

Todos los eventos están controlados y sincronizados con el estado de React.

---

## Decisiones de diseño

### ¿Por qué creé los nuevos componentes?

#### RuleForm

Se creó para **separar la lógica de creación de normas** del resto de la aplicación, evitando sobrecargar `App.jsx`.

#### CategoryFilter

Resuelve el problema de **filtrar normas por tipo**, mejorando la experiencia del usuario y la organización del contenido.

#### CounterDisplay

Proporciona **feedback inmediato** sobre el cumplimiento de normas, reforzando el objetivo principal de la aplicación.

---

## Tecnologías usadas

* **React** – Librería para interfaces de usuario.
* **Vite** – Build tool rápido con HMR.
* **TailwindCSS** – Estilos mpersonalizados y modo oscuro.
