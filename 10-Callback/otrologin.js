// Declaro las variables
let email;
let password;

// Base de datos
let emailDatos = 'pepe@gmail.com';
let passwordDatos = '12345678';

// 1. Declaramos una variable para manejar el formulario
let formulario = document.getElementById("formulario");

// 2. Agregamos un evento al formulario
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault(); // 3. Evitamos que el formulario envíe datos vacíos
    loginUser(evento);
});

// Función para manejar el login
const loginUser = (evento) => {
    email = evento.target.email.value;
    password = evento.target.password.value;

    if (email === "" || password === "") {
        alert('Complete los campos');
        return;
    }
    if (email === emailDatos && password === passwordDatos) {
        alert("Usuario logueado");
    } else {
        alert("Usuario no logueado");
    }

    console.log(email);
    console.log(password);
    console.log(evento);
}

// Modo oscuro
const modoOscuro = () => {
    console.log("Activamos el modo oscuro");

    // Tomamos el body
    let fondo = document.getElementById("fondo");

    // Tomamos el título
    let titulo = document.getElementById("titulo");

    // Tomamos el botón
    let boton = document.getElementById("boton");

    // Cambiamos el color de fondo
    fondo.style.backgroundColor = "black";

    // Cambiamos el color del título
    titulo.style.color = "white";

    // Cambiamos el texto del botón
    boton.innerHTML = "Modo Claro";
}









