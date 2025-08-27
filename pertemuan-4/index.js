//Javascript Function

// Cara 1. Function declaration
// function greet() {
//     console.log("hello world")
// }

// greetings() // call function

// // cara 2. function expression
// let greet2 = function() {
//     console.log("hello world 2")
// }
// greetings2()

// cara 1
//Function with return value (output) and arguments (input)
//            [parameter]
function greetings(fullname){
    return "hello" + fullname
}
//         argment
let output = greetings("John Doe")
console.logo(output)

// cara 2
const greetings2 = function (fullName){
    return "hello " = fullname
}


// global , local, block scope variable
let x = 10 // global wolrd variable
console.log(x) //10
function func1() {
    console.log(x) // 10
    let y = 20 // local variable
    console.log(y) // 20
    if (true) {
        let z = 30 // block scope variable
        console.log(z) // 30
    }
} 
 // mini exercise
 // buatlah funcution yang menghitung BMi dimana input adalah berat dan tinggi
 // dan output adalah BMI
function calculateBMI(berat, tinggi) {
    return berat / (tinggi * tinggi)
}
let bmi = calculateBMI(70, 1.75)
let beratBadan = 70 // kg
let tinggiBadan = 1.73 // m

 
 let hasilBmi = bmi(beratBadan, tinggiBadan)
 console.log("BMI anda adalah: " + hasilBmi.toFixed (2))    
