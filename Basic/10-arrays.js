// ARRAYS
    
// Declaracion   >   2 formas posibles: 
let myArray = []
let myArray2 = new Array()

// Inicializacion
myArray = [1]       // almacena el numero 1 
myArray2 = new Array(3)     // separa 3 espacion vacias en el array

console.log(myArray)
console.log(myArray2)



myArray = [1,2,3,"Mijail", true]       // almacena el numero 1 2 3 4 
myArray2 = new Array(1,2,3,"Mijail", true)     // almacena el numero 1 2 3 4 


console.log(myArray)
console.log(myArray2)

// Añadiendo poco a poco valores
myArray2 = new Array(3)
myArray2[0] = "Brais"
myArray2[1] = "Moure"
myArray2[2] = "mouredev"

console.log(myArray2)



// Añadiendo poco a poco valores myArray
myArray[1] = "Mouredev"

console.log(myArray)


// Metodos comunes 

//      push : Introduce elementos a un array, sigue un orden creciente
//      pop : Elimina el ultimo elemento del array

myArray = []

// push
myArray.push("Brais")  // introducir elementos en el array
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray)

