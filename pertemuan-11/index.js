//Destructuring & Module
//1. Destructuring
//Destructuring Array & Object
let numbers = [1, 2, 3, 4, 5];
// let num1 = numbers[0];
// let num2 = numbers[1];
// let num3 = numbers[2];
// let num4 = numbers[3];
// let num5 = numbers[4];

//Destructuring Array ES6
// let [num1, num2, num3, num4, num5] = numbers;
// console.log(num1, num2, num3, num4, num5);

//Destructuring sebagian item saja
let [n1, , n3, , n5] = numbers;
console.log(n1, n3, n5);

//Destructuring dengan Rest Parameter
let [num1, ...rest] = numbers;
console.log(num1); // Output: 1
console.log(rest); // Output: [2, 3, 4, 5]

//Destructuring Object
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
// let name = person.name;
// let age = person.age;
// let city = person.city;
// console.log(name, age, city);

//Destructuring Object ES6
// let { name, age, city } = person;
// console.log(name, age, city);

//Destructuring Object dengan Rest Parameter
let { name, ...restObj } = person;
console.log(name);

//Mini Exercise
//Cari di exercise pertemuan-4 yang mana yang bisa dilakukan destructuring
//Lalu lakukan destructuring pada function tersebut
//Lakukan destructuring pada argumen function
//1. Calculate Retirement
const calculateAge = birthYear => 2019 - birthYear;
const yearUntilRetirement = ({ year, firstName }) => {
    const age = calculateAge(year);
    const retirement = 60 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
};
yearUntilRetirement({ year: 1987, firstName: "John" });

//Module
import { student as mahasiswa, numbers } from './data.js'; //frontend
import sayGreeting from './Greetings.js'; //frontend
// const student = require('./data.js') //backend

console.log(mahasiswa);
console.log(sayGreeting());