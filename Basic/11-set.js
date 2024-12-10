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

// add
mySet.add("https://moure.dev")

console.log(mySet)


// delete
mySet.delete("https://moure.dev")   // aqui eliminamos "https://moure.dev" del set

console.log(mySet)
