// con los módulos de node, no necesitamos instalar nada
// estamos utilizando un modulo nativo de node.js
//os es el modulo de node que nos permite trabajar con el sistema operativo


//importamos el modulo os de node js
const os = require('os');

console.log(os.cpus());
console.log(os.platform());
console.log(os.version());
