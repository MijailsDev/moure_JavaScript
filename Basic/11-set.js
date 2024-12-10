// SET

// Declaracion 
let mySet = new Set()         // forma correcta de declarar

console.log(mySet)


// Inicializacion 
mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

console.log(mySet)


// Metodos comunes

//      add : agrega elementos al final del set
//      delete : elimina los elementos que queremos eliminar
//               ademas devuelve true si fue eliminado y false si no fue.
//      has : comprueba si tiene o no tiene el elemento
//      size : muestra el tamaño del set

// add
mySet.add("https://moure.dev")

console.log(mySet)


// delete
mySet.delete("https://moure.dev")   // aqui eliminamos "https://moure.dev" del set

console.log(mySet.delete("Brais"))
console.log(mySet.delete(4))        // aqui eliminamos a brais


console.log(mySet)


// has

console.log(mySet.has("Moure"))     // contiene el elemento Moure ?
console.log(mySet.has("Brais"))


// size
console.log(mySet.size)


// Convertir un set a array
let myArray = Array.from(mySet) // copia todos los elementos del set a un array