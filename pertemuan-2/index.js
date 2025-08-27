//JavaScript Variable & Operators
//1. JavaScript Variables
let name = "John Doe"
const age = 30

//Tipe-tipe Data
const gender = "male" // string
let isMarried = false // boolean
let height = 175.5 // number
let grade = null // null
let address // undefined
let hobbies = ["reading", "traveling", "gaming"] // array

//2. JavaScript Operators
// Arithmetic Operators
let bil1 = 20; // Addition
let bil2 = 5; // Subtraction 
console.log(bil1 + bil2); // Output: 25
console.log(bil1 - bil2); // Output: 15
console.log(bil1 * bil2); // Output: 100
console.log(bil1 / bil2); // Output: 4
console.log(bil1 % bil2); // Output: 0
console.log(bil1 ** bil2); // Output: 3200000 (20 raised to the power of 5)

//Mini Exercise
//Buatlah program yang menghitung luas lingkaran dengan jari-jari 7 cm
let r = 7
let area = Math.PI * r ** 2
console.log(`Luas lingkaran dengan jari-jari ${r} cm adalah ${area.toFixed(2)} cm²`)

//Logical Operators
let a = true;
let b = false;
console.log(a && a); // Output: true (AND)
console.log(a && b); // Output: false (AND)
console.log(b && b); // Output: false (AND)
console.log(a || a); // Output: true (OR)
console.log(a || b); // Output: true (OR)
console.log(b || b); // Output: false (OR) 
console.log(!a); // Output: false (NOT)

//Ternary Operators
let ages = 16;
let isEligible = ages >= 18 ? "Bisa buat KTP" : "Tidak bisa buat KTP";
console.log(isEligible);

//Mini Exercise
//buat program yang dapat menghitung BMI (Body Mass Index) seseorang
//Rumus BMI = berat(kg) / (tinggi(m) * tinggi(m))
//Jika BMI > 25 -> "Bmi anda adalah overweight, kategori kelebihan berat badan"
//Jika BMI < 25 -> "Bmi anda adalah underweight, kategori normal"
let weight1 = 65
let height1 = 1.65
let BMI = weight1 / (height1 * height1)
let hasil = BMI > 25 ? "Bmi anda adalah overweight, kategori kelebihan berat badan" : "Bmi anda adalah underweight, kategori normal"
console.log(`BMI anda adalah ${BMI.toFixed(2)}. ${hasil}`);