// 1. Crea una variable para cdada operacion aritmetica
let a=10, b=20
// 2. Crea una variable para cada tipo de operacion de asignacion, que haga uso
//    de las variables utilizadas para las operaciones aritmeticas
let asignacion = null
// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparacion
console.log(a < b)
console.log(a != b)
console.log(a == 10)
console.log(a === 10)
console.log(0 == false)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparacion
console.log(a > b)
console.log(a == b)
console.log(a != 10)
console.log(a >= 12)
console.log(0 == true)


// 5. Utiliza el operador logico and
console.log(a < b && a == b)

// 6. Utiliza el operador logico or
console.log(a < b || a == b)

// 7. Combina abos operadores logicos
console.log(a < b && a == b || b > a)

// 8. Añade alguna negacion
console.log(!(a < b) || a == b)

// 9. Utiliza el operador ternario
let isDriving = true
isDriving ? console.log("Si esta manejando") : console.log("No esta manejando")

// 10. Combina operadores aritmeticos, de comparacion y logicos
console.log((a+b) > (a*b+2) || (a-9*10) < 100)