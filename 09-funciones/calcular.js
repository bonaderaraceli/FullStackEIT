//funciones del ejercicio de la calculadora
const sumar = () => {
    //1.funcion parseINT: pasa un dato de tipo string a tipo entero
    let numUno= parseInt (prompt("Ingrese el primer numero:"));
    let numDos= parseInt(prompt("Ingrese el segundo numero:"));

    let resultado= numUno + numDos;

    alert('El resultado de la suma es:'  + resultado);
}

const restar= () => {
    let numUno= parseInt(prompt ('Ingrese el primer numero'));
    let numDos= parseInt(prompt ('Ingrese el segundo numero'));

    let resultado= numUno - numDos;

    alert ('El resultado de la resta es:' - resultado);
}
