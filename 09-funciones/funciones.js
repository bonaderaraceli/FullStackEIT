//estructura de codigo que ejecuta una tarea especifica 
//puede ser reutilizada en diferentes partes del codigo

//son variables globales

let password = 123456789;
let email;


console.log('Hola Mundo');
console.log('Hola Mundo');
console.log('Hola Mundo');
console.log('Hola Mundo');
console.log('Hola Mundo');
console.log('Hola Mundo');
console.log('Hola Mundo');

console.log('===================================');

//estructura de una funcion sin parametros y/o argumentos /info que necesita la funcion para ejecutarse


function saludoInicial () {console.log('Hola Mundo desde una Funcion')}

saludoInicial();
//las funciones no se ejecutan hasta que son llamadas/invocadas

console.log('===================================');

saludoInicial();
saludoInicial();
saludoInicial();
saludoInicial();

console.log('===================================');

//funciones con parametros argumentos que necesita la funcion

function sumar (numeroUno, numeroDos){
    let resultado = numeroUno + numeroDos;
    console.log (numeroUno);
    console.log (numeroDos);
    console.log('El resultado de la suma es:'+ resultado);
}

sumar(10,20);

console.log('===================================');

//variables locales: son las que viven dentro de una funcion y no pueden ser accedidos desde fuera de la funcion. FUNCION NATIVA. ARGUMENTOS. PARAMETROS.
function sumarDos(x, y) {
    let resultado= x + y;

    console.log(x);
    console.log(y);

    console.log ('El resultado de la suma es:', resultado);
}

sumarDos(50,100);

// console.log (x,y) error porque son variables locales
console.log('===================================');

let array = [1,2,3,4,5,6,7,8,9,10];
for (let index=0; index < array.length; index++) {
    const element= array [index];
}

//console.log (index);
//error porque es una variable local

console.log('===================================');
//array funcion = funcion flecha
// signo de igual + alt62 forman la flecha

const restar = (numeroUno, numeroDos) => {
    let resultado = numeroUno - numeroDos;
    console.log (numeroUno);
    console.log (numeroDos);
    console.log('El resultado de la resta es:', resultado);
};

restar(100,50);

console.log('===================================');

console.log(password); //variable global (fuera de una funcion o bucle)
//console.log(resultado); variable local que esta dentro de una funcion
//console.log(index); variable local dentro de un bucle (for)

//funciones con retorno de valor
const dividir = (numeroUno, numeroDos) => {
    let resultado = numeroUno / numeroDos;
    return resultado;
} 

let iva= dividir (100,10)* 20;

console.log('El iva a pagar es' +  iva);


function decirNombre(nombre) {
    let saludo = 'Hola' + nombre;
    return saludo;
}

decirNombre('Juan');
console.log (decirNombre ('Juan'));
let saludo = decirNombre ('Pepe');
console.log (saludo);











