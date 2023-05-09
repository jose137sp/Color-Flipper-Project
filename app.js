// Seleccionamos el botón y el label
const button = document.getElementById('btn');
const body = document.getElementById('body');
const colorCode = document.getElementById('color-code');

// Agregamos el evento click al botón
button.addEventListener('click', function () {
    // Generamos un color aleatorio en formato hexadecimal
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // Cambiamos el color del fondo del botón
    body.style.backgroundColor = color;
    // Actualizamos el valor del label con el código hexadecimal del color generado
    colorCode.textContent = color;
});