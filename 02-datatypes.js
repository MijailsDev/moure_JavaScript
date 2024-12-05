/* 
TIPOS DE DATOS
    Son datos basicos e inmutables y representan un solo valor    

    Tipos de datos primitivos:
        existen 7 tipos:
            1. String > Cadena de texto
            2. Int Decimal > Numeros
            3. Boolean > Booleanos
            4. Undefined > Variable declarada sin un valor agregado
            5. Null     > Ausencia de valor(intensionadamente)
            6. Symbol   > Son valores unicos , pueden usados como identificadores de propiedades 
                          Para intentar evitar colisiones entre otras propiedades  
            7. BigInt   > Numeros interos extremadamente grandes (ocupa todo el espacio de memoria de la computadora)
*/

// Strings
let myname = "Mijail"
let alias = 'wolf'
let email = `mijailwwe@gmail.com`

// Numeros
let age = 37    // Entero 
let height = 1.77   // Decimal 

// Booleanos (boolean)
let isStudent = true
let isTeacher = false

// Undefined
let undefinedValue
console.log(undefinedValue)

// Null
let nullValue = null

// Symbol
let mySymbol = Symbol("mysymbol")

// BigInt 
let myBigInt = BigInt(3134431316513134653654316546546841654)
let myBigInt2 = 3134431316513134653654316546546841654n		// este tambien es una forma de representar un BigInt


// Mostramos los tipos de datos 
console.log(typeof myname)
console.log(typeof alias)
console.log(typeof email)


console.log(typeof age)
console.log(typeof height)


console.log(typeof isStudent)
console.log(typeof isTeacher)


console.log(typeof undefinedValue)


console.log(typeof nullValue)


console.log(typeof mySymbol)


console.log(typeof myBigInt)

console.log(typeof myBigInt2)

