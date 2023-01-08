// 1. In ra màn hình 5 lần dòng chữ "Happy new year!"
console.log("Happy  new year !")
console.log("Happy  new year !")
console.log("Happy  new year !")
console.log("Happy  new year !")
console.log("Happy  new year !")

// Refactor
for (let num = 0; num < 5; num++) {
    console.log("Happy  new year !")    
}


// 2. Cho 1 số bất kỳ và in ra màn hình số vừa cho là chẵn hay lẽ

const  number = 17

if (number % 2 == 0) {
    console.log(`${number} is even`)
} else {
    console.log(`${number} is odd`)
}
