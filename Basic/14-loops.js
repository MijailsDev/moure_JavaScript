// Loops o bucles

// for
for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
} 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}


// while
let  i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}



// do while
i = 6
do {
    console.log(`do-while Hola ${i}`)
    i++
}while(i < 5)