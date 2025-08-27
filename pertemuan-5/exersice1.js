// Buatlah program untuk menghitung BMI dengan menggunakan
// IIFE % Callback function 
// 1. IIFE
( function (berat, tinggi){
    let bmi = berat / (tinggi * tinggi);
    console.log("BMI anda adalah: " + bmi.toFixed(2));
})(70,  1.75);

// 2. callback function
(function () {
    console.log("Hello World");
})();

 
 let hasilBmi = bmi(beratBadan, tinggiBadan)
 console.log("BMI anda adalah: " + hasilBmi.toFixed (2))    

// 2. callback 

(function (){
    console.log("hello world");
})();


// with parameter & return value
let output = (function (fullNAme) {
    return "hello " + fullName;
})("john doe");

console.log(output);