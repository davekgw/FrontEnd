// IIFE & callback function
// 1. IIFE (Immediately Invoked funtion expression)
//    sell-executing anomymous function]

// (function (){
//     console.log("hello world");
// })();



// let output = (function (fullNAme) {
//     return "hello " + fullName;
// })("john doe");

// console.log(output);

// 2. callback function
// function passed into another as an argument 

// function greeting(callback){
//     callback();
// }

// greeting(function () {
//     console.log("Hello callback");
// });


function greeting(callback){
    callback("john doe");
    return output;
}


let output2 = greetings(function (fullname) {
    return "hello " + fullname;
});

console.log(output2);


