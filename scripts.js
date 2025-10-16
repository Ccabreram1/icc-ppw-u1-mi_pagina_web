//1. Cambiar el color del título al pasar el mouse por encima
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

//2.Da un mensaje de bienvenida al momento de abrir la pagina
    window.addEventListener("DOMContentLoaded",()=> {
        alert("Bienvenido a mi pagina web")
    });

});