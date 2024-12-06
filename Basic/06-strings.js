// Strings

// Concatenacion
let myName = "Mijail"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0]) // H
console.log(greeting[1]) // o
console.log(greeting[12]) // ! :  ultimo caracter

// Metodos comunes
console.log(greeting.toUpperCase())     // transforma a MAYUSCULAS
console.log(greeting.toLocaleLowerCase()) // transforma a minudculas
console.log(greeting.indexOf("Mijail")) // el indice donde a encontrado la palabra Mijail
console.log(greeting.indexOf("dev")) // -1 : no se encontro esa palabra
console.log(greeting.includes("Mijail"))  // nos devuel ve un booleano : true/false
console.log(greeting.includes("dev"))      // nos devuel ve un booleano : true/false
console.log(greeting.slice(0,10))          // imprime los indices desde el 0 a 10
console.log(greeting.replace("Mijail", "Goku")) // cambia el valor de Mijail a Goku



// Templates literals (plantillas literales)

let message = `Hola, este 
es mi
curso de 
JavaScript`                    // para escribir en saltos de linea escribir entre comillas invertidas

console.log(message)

let email = "mijail@mail.com"
console.log(`Hola, ${myName}! Tu email es ${email}`)  // interpolacion de variables: se necesita comillas invertidas y ${ } 




