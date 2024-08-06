//POO= programacion orientada a objetos (JAVA - C - C++ - CH# -  PHP - Python- Ruby - TS)

class Auto {
    //atributos
    color= '';
    marca= '';
    modelo= '';
    puertas= 0;

    //constructor
    constructor(color,marca,modelo,puertas){
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.puertas = puertas;
}
    //metodos
    
    encender(){
    console.log('El auto se enciende');
    }

    
    apagar(){
    console.log('El auto se apaga');
    }

    
    acelerar(){
    console.log('El auto esta acelerando');
    }
}

//instanciar una clase en un objeto

let miAuto= new Auto('Rojo', 'Toyota','Corolla', 4);

//le pregunto a miAuto de que tipo de variable es
console.log(typeof miAuto);

miAuto.acelerar();

let tuAuto= {
    color: 'verde',
    marca: 'Ford',
    modelo: 'Fiesta',
    puertas: 2,
    encender : function () {
        console.log ('El auto se ha encendido');
        },  
    apagar(){
        console.log('El auto se ha apagado');
        },
    acelerar(){
        console.log('El auto esta acelerando');
        }
    };

    console.log(typeof tuAuto);

    
    //bases de datos
    //JSON ==> JavaScrip Object Notation

    let personaTres={
        "nombre":'Pepe',
        "apellido": 'Perez',
        "edad": 25,
        "direccion": 'Calle 123',
        "casado": true,
        "calificacion": 9.5,
        "pais": 'Argentino',
        "saldo": 1500,
        "tarjeta": true
    };

    console.log(typeof personaTres);