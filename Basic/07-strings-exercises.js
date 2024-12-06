// 1. Concatena dos cadenas de texto 
let name = "Mijail"
let age = 23
let texto = "Mi nombre es "+ name + ", y mi edad es "+age
console.log(texto)

// 2. Muestra la longittud de una cadena de texto
console.log(texto.length)

// 3. Muestra el primer y ultimo caracter de un string
console.log(texto[0])
ultimoCaracter = texto.length -1 
console.log(texto[ultimoCaracter])

// 4. Convierte a mayusculas y minusculas un string
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())

// 5. Crea una cadena de texto en varias lineas
let cadena = `Hola 
yo soy goku
y vengo a 
estudiar`

// 6. Interpola el valor de una variable en un string
console.log(`Yo soy ${name} y tengo ${age}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(texto.replaceAll(" ", "-"))

// 8. Comprueba su una cadena de texto contiene una palabra concretta
console.log(texto.includes("nombre"))

// 9. Comprueba si dos strings son iguales
console.log(name == age)

// 10. Comprueba si dos strings tiene la misma longitud
console.log(name.length === age.length)