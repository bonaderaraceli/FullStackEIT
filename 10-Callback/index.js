//longitud de la contraseña
let password ='12345678';
console.log(password.length);

//Ejemplo de validacion nativa de JS
function validarPassword(pass) {
if (password.length >= 8 && typeof String){
if(password == '12345678'){console.log ('Contraseña valida')}
console.log('Hola admin');}
else {
console.log('Tu contraseña tiene ' + password.length + ' caracteres y no es válida');
location.href= 'error.html';}
}

//validarPassword();


function validarPass(pass) {
    if (pass.length >= 8 && typeof String){
    if(pass == '12345678'){console.log ('Contraseña valida')}
    console.log('Hola admin');}
    else {
    console.log('Tu contraseña tiene ' + password.length + ' caracteres y no es válida');
    location.href= 'error.html';}
    }
    
    validarPass('password');

    
//let alumnos=['Juan', 'Pedro','Pablo', 'Maria','Ana'];
//console.log(alumnos.length)
//if (password.length){}