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
const modoOscuro = () => {
    console.log("Activamos el modo oscuro");

    let fondo = document.getElementById("fondo");
    

    let titulo = document.getElementById("titulo");
    

    let boton = document.getElementById("boton");
    

    fondo.style.backgroundColor = "#0D1117";
    titulo.style.color = "white";
    boton.innerHTML = "Modo Claro";

    let oculto = document.getElementById("oculto").value
    alert(oculto);
    let archivo = document.getElementById("archivo")
    archivo.style.backgroundColor= "black";
}

const mostrar = () => {
    let password = document.getElementById("password");
    //tomamos el icono para el password
    let iconoOjo = document.getElementById("iconoOjo");

    
    
    if (password.type === "password"){
        password.type = "text";}
    else {
        password.type = "password";}
} 

let dia = new Date();

console.log(dia);
console.log(dia.getDay());
console.log(dia.getFullYear());
console.log(dia.getMonth());
console.log(dia.setMilliseconds());
console.log(dia.getUTCDay());









