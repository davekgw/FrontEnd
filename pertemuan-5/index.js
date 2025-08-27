// IIFE & callback function
// 1. IIFE (Immediately Invoked funtion expression)
//    sell-executing anomymous function]

(function (){
    console.log("hello world");
})();


// with parameter & return value
let output = (function (fullNAme) {
    return "hello " + fullName;
})("john doe");

console.log(output);

// 2. callback function
// function passed into another as an argument 

// function greeting(callback){
//     callback();
// }

// greeting(function () {
//     console.log("Hello callback");
// });

//callback function with parameter & return value
function greeting(callback){
    let res = callback("john doe");
    console.log(res);
}

// function as args must be a anomymous function
let output2 = greetings(function (fullname) {
    return "hello " + fullname;
});
console.log(output2);

// exersice #01
// 
