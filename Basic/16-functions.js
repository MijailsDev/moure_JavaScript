// Funciones    :   Es un bloque de codigo para realizar una tarea especifica

// Declaracion 
function myFunc() {
    console.log("Hola, funcion!")
}

// llamada a la funcion
myFunc()
myFunc()
myFunc()
myFunc()
myFunc()


// Con parametros 
function myFuncWitharams (name) {
    console.log(`Hola, ${name}!`)
}
myFuncWitharams("Brais")
myFuncWitharams("MoureDev")


// Funciones anonimas   :   capacidad de almacenar la funcion en un variable
const myFunc2 = function (name) {
    console.log(`Hola, ${name}!`)
}

myFunc2("Brais Moure")
