// Condicionales
// if, else if , else

// if (si)
let age = 37

if (age == 37){
    console.log("La edad es 37")
}


// else (si no)

if (age != 37){
    console.log("La edad es DIFERENTE de 37")
}else{
    console.log("La edad es 37 con else")
    
}



// else if (sino, si)

if (age != 37){
    console.log("La edad es DIFERENTE de 37")

}else if(age < 90){
    console.log("La edad es MENOR que 90")

}else{
    console.log("La edad es 37 con else")
    
}


// Operadores ternarios

const message = age == 37 ? "La edad es 37" : "La edad no es 37" 
console.log(message)



// Switch

let day = 0
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break   
    default:
        dayName = "numero del dia incorrecto"

}
console.log(dayName)
