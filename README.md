# 🚀 Mi Portfolio Personal - Ángel Sánchez

Bienvenido al repositorio de mi API de STAR WARS. Objetivo:
* Acceder a una API externa de `STAR WARS`.
* Seleccionar información de personajes, naves y planetas de **STAR WARS**.
* Mostrar todos estos datos recibidos en cartas con una bonita presentación.
* Por ejemplo: seleccionas `personajes`, introduces `luk` y buscará todos los personajes que contengan ese texto => mostrará los datos de **Luke SkyWalker**.

> "20 años en programación industrial, ahora construyendo soluciones en la web."

---
### 🌐 Mi STAR WARS API Web
[![Ver Demo](https://img.shields.io/badge/Demo-Star_Wars_API-yellow?style=for-the-badge&logo=starwars)](https://angelsandev.github.io/StarWars_API/)

![API de STAR WARS de Ángel Sánchez](./src/images/API%20de%20STAR%20WARS%20de%20Ángel%20Sánchez.png)

> 💡 **Nota:** Puedes ver mi web de STAR WARS API pulsando el botón. Más abajo lo que tienes es una descripción técnica de todas las tecnologías que he utilizado para desarrollar el Proyecto.

---

## 🛠️ Stack Tecnológico

* **HTML5:** Estructura semántica adecuada para SEO y accesibilidad.
* **CSS3:** Flexbox  (con diseños adaptativos).
* **JavaScript (ES6+):** Lógica interactiva, manipulación dinámica del DOM, funciones, creación objetos, json, búsqueda dinámica.
* **API:** Llamadas a API externa `https://swapi.py4e.com/api/`.

![Estructura HTML y CSS](./src/images/Estructura%20HTML%20y%20CSS.png)
---

## 🧠 Lógica y Funcionalidades (JavaScript)

Utilizo varios conceptos en JavaScript para interactividad, rendimiento y dinamismo. Experiencia de Usuario (UX).

### 1. Funciones y Funciones predefinidas
Funciones para crear letras aleatorias o funciones para crear personajes aleatorios de Star Wars con los datos recibidos de la API externa. Uso de funciones `Math`, `random()` y `fetch` entre otras.

### 2. Gestión de Navegación y DOM

* **Objetos:** Acceso a propiedades de objetos recibidos de la API.
* **Estructuras:** Uso de estructuras de decisión, bucles e iteraciones, .
* **Captura de Eventos:** Uso de `event listeners`.
* **Acceso al DOM:** Identificación de elementos, modificación del documento mediante código.

![Gestión en JavaScript](./src/images/Gestión%20en%20JavaScript.png)

### 🌐 Consumo de APIs Externas (Fetch API)

He implementado el uso de la **Fetch API** de JavaScript para la recuperación dinámica de datos:

* **¿Qué es Fetch?**: Es una función nativa de JavaScript que permite realizar peticiones asíncronas (HTTP) a servidores externos. 
* **Gestión de Promesas**: Usando `.then()` permite recibir la respuesta en formato  **JSON** y usar esos datos en el DOM.
* **Búsqueda Dinámica**: Para acceder a la API, construyo una URL dinámicamente usando *Template Strings*, para acceder a categorías (`planets`, `people`, `starships`). Incluso puedo realizar búsquedas personalizadas mediante parámetros de consulta (`?search=`).

![Gestión de datos](./src/images/Gestión%20de%20datos.png)

---

### 🚀 ¿Cómo usar este repositorio?

Si necesitar observar este proyecto de forma local:

1.  **Clona el proyecto:**
    ```bash
    git clone [https://github.com/angelsandev/StarWars_API](https://github.com/angelsandev/StarWars_API)
    ```
2.  **Abre el archivo:**
    Abre el archivo `index.html` en tu navegador.
3.  **¡Explora el código!**
    Podrás revisar la arquitectura y código. Pero recuerda echar un vistazo a mi experiencia y habilidades. Gracias.

## 📂 Organización del Proyecto

```text
/
├── index.html          # Estructura principal y semántica
├── src/
│   ├── css/
│   │   └── style.css   # Variables, Layouts (Flex) y Responsive Design
│   ├── js/
│   │   └── script.js  # Eventos y lógica 
│   └── images/         # Assets y capturas de los proyectos
├── README.md
└── CHANGELOG.md