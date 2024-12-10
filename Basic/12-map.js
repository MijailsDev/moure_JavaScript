//   Map    -   Es una coleccion de elementos    
//              Cada elemento esta formado por un par 

// Declaracion
let myMap = new Map()

console.log(myMap)


// Inicializacion 
myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)



// Metodos y propiedades

//      set : para actualizar o agregar un elemento
//      get : devuelve el valor


//set 
myMap.set("alias", "mouredev")      // agregar
myMap.set("name", "Brais Moure")    // actualizar
console.log(myMap)



//get 
console.log(myMap.get("name"))  // devuelve el valor de la clave name
console.log(myMap.get("surname"))  // no existe esa clave


// has
console.log(myMap.has("surname")) // contienen la clave surname ?
console.log(myMap.has("age"))       // contienen la clave age ?



// delete
myMap.delete("email")   // eliminamos la clave "email" por lo cual tenemos menos un elemento en el Map
console.log(myMap)


// Keys
console.log(myMap.keys())   // devuelve un listado de todos las claves

// Values
console.log(myMap.values()) // devuelve los valores del Map

// size
console.log(myMap.size)     // muestra el tamaño de este Mapa

// clear
myMap.clear()       // vacia el map, queda sin elementos
console.log(myMap)


