// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnEqcb06HlE_aDNqRYbTaFe-BwwUzD5a8",
    authDomain: "color-flipper-js.firebaseapp.com",
    projectId: "color-flipper-js",
    storageBucket: "color-flipper-js.appspot.com",
    messagingSenderId: "926165681803",
    appId: "1:926165681803:web:ab9bd8eb9724da9d92f68e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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