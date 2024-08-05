/*Un bucle es un ciclo que repite una estructura de código*/

console.log('Imprimo el archivo de JS');
console.log('Imprimo el archivo de JS');
console.log('Imprimo el archivo de JS');
console.log('Imprimo el archivo de JS');

/*Variable del arreglo o array*/
let pepe='Pepe';
let pepes='Pepe';
let pepess='Pepe';
//index(n-1)     0      1       2       3      4      5     6       7       8       9
let alumnos=['Juan', 'Pepe','Marta','Pedro','Luis','Ana','Rosa','Maria','Carlos','Jorge'];
let productos=['Coca','Fanta','Sprite','Pepsi','Mirinda','7up','Manzanita','Del Valle'];

console.log('alumnos'); /*Imprimimos el array*/
console.log('productos');/*Imprimos el array*/
console.log(alumnos [0]);
console.log(productos[6]);

//funcion de contar los elementos en un array
console.log(alumnos.length);


//info
//1.variable local
//2.condicion
//3.incremento

//Ejemplo de bucle
for(let index= 0; index < 10; index ++) {console.log('Imprimo el archivo de JS');
    console.log(index);
}
console.log ('====================================');

//Imprimo el array de alumnos de uno en uno
for(let index= 0; index < alumnos.length; index ++) {console.log(alumnos[index]);
    console.log(index);
}
console.log ('====================================');

//Imprimo el array de alumnos de tres en tres
for(let index= 0; index < alumnos.length; index +=3) {console.log(alumnos[index]);
    console.log(index);
}
console.log ('====================================');

//Los arreglos tienen algunas funciones por defecto
//Agregar elementos al final del array
alumnos.push('Javier');
for(let index= 0; index < alumnos.length; index ++) {console.log(alumnos[index]);
}
// [] = tipo de dato de arreglo, datos separados por coma
// index          0      1      2       3      4          5     6     7
let persona= [12345678,'Juan','Perez', 29 , 'Calle 123', true, 9.5, 'Mexico'];

//Objetos literales de JS. Es una variable que guarda informacion entre llaves y tiene propiedad : valor

let personaDos={
    nombre:'Pepe',
    apellido: 'Perez',
    edad: 25,
    direccion: 'Calle 123',
    casado: true,
    calificacion: 9.5,
    pais: 'Argentino'
};
console.log(persona);
console.log (persona[1]);

console.log(personaDos);

let empleadosEmpresa= [{
    nombre:'Juana',
    apellido: 'Perez',
    edad: 25,
    direccion: 'Calle 123',
    casado: true,
    calificacion: 9.5,
    pais: 'Argentino'
},
{   nombre:'Juan',
    apellido: 'Perez',
    edad: 25,
    direccion: 'Calle 123',
    casado: true,
    calificacion: 9.5,
    pais: 'Argentino'},

    {
        nombre:'Maria',
        apellido: 'Perez',
        edad: 25,
        direccion: 'Calle 123',
        casado: true,
        calificacion: 9.5,
        pais: 'Argentino'
    }];

console.log(empleadosEmpresa[0].nombre)

for (let index = 0; index < empleadosEmpresa.length; index++) {
    console.log (empleadosEmpresa [index]. nombre);
    
}
