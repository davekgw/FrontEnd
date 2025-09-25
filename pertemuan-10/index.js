//Rest Parameter & Spread Operator
//1. Rest Parameter (bertipe data array)
const funct1 = (...rest) => {
    console.log(rest);
}
funct1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);

//Mini Exercise
//Buatlah fungsi yang dapat menjumlahkan semua angka yang diberikan pada argumen fungsi
const sumAll = (...numbers) => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}       
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

//2. Spread Operator (bertipe data object/array)
//Spread pada Array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]
console.log(...combinedArr); // Output: 1 2 3 4 5 6

//Spread pada Object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }
//1. Duplikasi Object
const original = { x: 1, y: 2 };
const duplicate = { ...original };
console.log(duplicate); // Output: { x: 1, y: 2 }