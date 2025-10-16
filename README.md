# Programacion y plataformas Wber
---
# Práctica 1 – Explorando los Estándares Web con HTML, CSS y JavaScript

**Asignatura:** Programación y Plataformas Web  
**Unidad:** 1.2 – Estándares Web  
**Estudiante:** Sebastian Cabrera
**Repositorio:**  
**Página desplegada (GitHub Pages):** https://ccabreram1.github.io/icc-ppw-u1-mi_pagina_web/

---

## Estructura HTML utilizada

| Componente | Descripción | Implementación |
|-------------|--------------|----------------|
| `<!DOCTYPE html>` | Declaración del documento HTML5 | Línea 1 |
| `<html lang="es">` | Idioma del documento | Español |
| `<header>` | Encabezado principal | Contiene `<h1>` y `<h2>` |
| `<section>` | Agrupa contenido principal | Dos secciones con `<h2>` |
| `<table>` | Muestra los elementos estudiados | Tres filas con `<th>` y `<td>` |
| `<footer>` | Pie de página | Nombre del estudiante y asignatura |

--- 

## Nuevas etiquetas exploradas

| Etiqueta | Descripción | Implementación |
|-----------|--------------|----------------|
| `<figure>` | Contenedor para imagen con pie de foto | Futbol y paseo `<figcaption>` |
| `<aside>` | Contiene link de publicidad | Representa instagram del autor |

**Código usado:**
```html
<figure id="imagenes">
  <div>
    <img src="Futbol.png.jpg" alt="Futbol" width="300"> 
    <figcaption>Futbol</figcaption>
  </div>
  <div>
    <img src="Novia.png.jpg" alt="Novia" width="300">
    <figcaption>Paseo</figcaption>
  </div>
</figure>

<aside>
  <h2>REDES SOCIALES</h2>
  <ul>
    <li><a href="https://www.instagram.com/tato_cabrera_jr?igsh=ZDA2NHp4M291YTds&utm_source=qr">INSTAGRAM</a></li>
  </ul>
</aside>
```


---
## Práctica 2 – Adición de CSS y JavaScript
---
| Archivo     | Descripción                                                                                         | Ubicación                 |
| ----------- | --------------------------------------------------------------------------------------------------- | ------------------------- |
| `style.css` | Contiene todos los estilos visuales del sitio (colores, tipografía, márgenes, botones, tabla, etc.) | Carpeta raíz del proyecto |
| `script.js` | Contiene las funciones y eventos JavaScript que agregan comportamiento dinámico                     | Carpeta raíz del proyecto |

## Estructura final del proyecto:
```
icc-ppw-u1-mi_pagina_web/
│
├── Futbol.png.jpg
├── index.html
├── Novia.png.jpg
├── script.js 
├── style.css
└── README.md
```

**2. Implementación en HTML**

Los nuevos archivos se enlazaron dentro del documento `index.html` de la siguiente forma:

**En el `<head>` (para el CSS):**

```html
   <link rel="stylesheet" href="style.css">
```

**Antes de cerrar el `<body>` (para el JavaScript):**

```html
    <script src="scripts.js"></script>
```

---

### 3. Estilos aplicados con CSS

| Elemento                    | Estilo implementado                                            | Descripción                             |
| --------------------------- | -------------------------------------------------------------- | --------------------------------------- |
| `body`                      | font-family: 'Times New Roman'font-family: 'Times New Roman', Times, serif; background-color: rgb(163, 205, 253); margin: 0; padding: 0;| Define la fuente principal de la página, aplica fondo celeste y elimina márgenes/rellenos por defecto.|
| `header`                    |background-color: rgb(0, 117, 250); color: black; text-align: center; padding: 1rem;|Crea una franja superior azul con texto centrado y relleno interior.
| `table`                     |border: 1px solid black; border-collapse: collapse;|Agrega bordes negros, unifica bordes y estructura visualmente la tabla de elementos.|
| `section`                   |background-color: rgb(255, 255, 255); padding: 1.5rem; margin-top: 20px; margin-bottom: 2rem; border-radius: 15px; box-shadow: 0 0 5px rgba(0, 0, 0, 0.20); width: 900px; margin-left: auto; margin-right: auto;|Contenedor blanco centrado, con sombra, bordes redondeados y márgenes superior e inferior.|
| `aside`                  || Contiene información complementaria, como enlaces o redes sociales, separada del contenido principal.|
| `div`                  |                          |Sirve como contenedor flexible para organizar imágenes y texto (figcaption) lado a lado. |

**Ejemplo en el código:**

```css
body{
    font-family: 'Times New Roman', Times, serif;
    background-color: rgba(138, 113, 113, 0.2);
    margin: 0;
    padding: 0;
}

header{
    background-color: rgb(5, 37, 51) ;
    color:  rgb(112, 166, 189);
    text-align: center;
    padding: 1rem ;
    margin-bottom: 2rem;
}
```

---

###  4. Interactividad agregada con JavaScript

El archivo script.js incorpora dos acciones básicas:

1.**Cambia el color del titulo al pasar el mouse por encima**
```javascript
document.addEventListener("DOMContentLoaded", () => {
    // Efecto al pasar el mouse por el título
    const titulo = document.getElementById("titulo");
    if (titulo) {
        const originalColor = window.getComputedStyle(titulo).color;
        titulo.addEventListener("mouseover", () => {
            titulo.style.color = "white";
        });
        titulo.addEventListener("mouseout", () => {
            titulo.style.color = originalColor || "";
        });
    }
 ```
2.**Da un mensaje de bienvenida al momento de abrir la pagina**
```javascript
    window.addEventListener("DOMContentLoaded",()=> {
        alert("Bienvenido a mi pagina web")
    });
});
 ```








