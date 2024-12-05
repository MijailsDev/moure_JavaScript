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
            
*/

// Strings
let name = "Mijail"
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