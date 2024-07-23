//operadores relacionales en javascript

let uno= 150;
let dos= 500;

let mayor= uno > dos;
console.log ('El numero' + uno 'es mayor que' + dos '+' : mayor);

let mayor= uno < dos;
console.log ('El numero' + uno 'es menor que' + dos' + ' : menor);

let mayor= uno == dos;
console.log ('El numero' + uno 'es = que' + dos '+' : + =);

let distinto= uno != dos;
console.log ('El numero' + uno 'es distinto que' + dos '+' : + distinto); 

//combinaciones de operaciones relacionales
let mayorIgual = uno >= dos;
console.log ('El numero' + uno + 'es mayor o igual que' + dos +': '+ mayorIgual);

let menorIgual = uno <= dos;
console.log ('El numero' + uno + 'es menor o igual que' + dos +': '+ menorIgual);

let identicoTodo = uno === dos; //identico en valor, tipo de dato, clon
console.log ('El numero' + uno + 'es idéntico que' + dos +': '+ identicoTodo);

//condicionales
// dentro del parentesis() iria la condicion que evalua el si logico
// dentro de las llaves{} ==> bloque de codigo que se ejecuta si la condicion se cumple
// se cumple con un booleano : true / false
// si es true se ejecuta el bloque de codigo, si es false no se ejecuta el bloque de codigo
let octavos= true; 
if(octavos) {
console.log ('El partido de octavos de final se juega el 4 de julio');}

console.log ('================================');

//if anidado
let edad= 18;
letinscripto= true;
letargentino= true;
if(edad > 18){console.log('1.puede votar')};

console.log ('================================');
if(edad >= 18)}
if(inscripto > 18)}
if(argentino)}
{console.log('2.puede votar')};

//operadores logicos && (and) || (or) ! (not)
//   1             2             3
if(edad > 18 && inscripto && argentino){
console.log('3.puede votar')};

console.log ('================================');

letemail= 'pepe@gmail.com';
letpassword= '1234';
//           true                          true
if(email== 'pepe@gmail.com' && password== '1234'){
    console.log('4.Bienvenido a la plataforma')};

    console.log ('================================');

    letemailUno= 'pepe@gmail.com';
    letpasswordUno= '123456789';
//ologico || con que uno de los dos sea true se ejecuta el bloque de codigo
//                   true                             false
    if(emailUno== 'pepe@gmail.com' || passwordUno== '1234'){
        console.log('5.Bienvenido a la plataforma')};
    
        console.log ('================================');

// 
letclub= true;
console.log(club);
if(!club){console.log ('6.Genial con tu club!!')};

console.log (!club);
console.log ('================================');








