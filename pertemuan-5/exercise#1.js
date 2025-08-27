// Buatlah program untuk menghitung BMI dengan menggunakan
// IIFE % Callback function

// 1. IIFE
(function(berat, tinggi){
    let bmi = berat / (tinggi * tinggi);
    console.log("BMI anda adalah: " + bmi.toFixed(2));
})(70, 1.70)

//2. Callback
