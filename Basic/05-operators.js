// OPERADORES

// Operadores aritmeticos 
let a = 5
let b = 10
console.log(a + b)     // Suma
console.log(a - b)     // Resta
console.log(a * b)     // Multiplicacion
console.log(a / b)     // Division

console.log(a % b)     // Modulo
console.log(a ** b)     // Exponentes

a++ // incremento
console.log(a)

b-- // Decremento
console.log(b)



// Operadores de asignacion 

let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2



// Operadores de comparacion
//      a = 6 
//      b = 9
console.log(a > b)      // a es mayor b ?
console.log(a < b)      // a es menor que b ?
console.log(a >= b)     // a es mayor o igual que b ?
console.log(a <= b)     // a es menor o igual que b ?
console.log(a == b)     // a es igual a b ?     -   comparacion de igualdad por valor
console.log(a == "6")   // esto tiene el mismo valor(DATO) > true
console.log(a === a)    // Igualdad por identidad (por tipo y valor)
console.log(a === 6)    // a es igual(estrictamente) a 6 ? > true
console.log(a != b)     // a es distinto de b ?

console.log(0 = false)  // true
console.log(1 == true)  // para los numeros 1,2,3 ... > true

// Truthy values (valores verdaderos)
// Todos los numeros positivos y negativos menos el cero
// El boolean true

// Falsy values (valores falsos)
// 0
// 0n
// null
// undefined
// NaN 
// El boolean false
// Cadenas de texto vacias