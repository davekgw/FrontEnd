//JavaScript Conditional & Loop
//JavaScript Conditional

//if - else
// let suhu = 35
// if (suhu >= 38){
//     console.log("Suhu Panas");
// } else {
//     console.log("Suhu Normal")
// }

//if - else if - else
//Jika nilai 91-100 tampilkan A
//Jika nilai 81-90 tampilkan B
//Jika nilai 71-80 tampilkan C
//Jika nilai <= 70 tampilkan D
// let nilai;
// if (nilai >= 91 && nilai <= 100){
//     console.log("Grade A")
// } else if (nilai >= 81 && nilai <= 90){
//     console.log("Grade B")
// } else if (nilai >= 71 && nilai <= 80){
//     console.log("Grade C")
// } else if (nilai <= 70){
//     console.log("Grade D")
// } else {
//     console.log("Out of Range")
// };

//switch-case
// let hari = 1
// switch (hari){
//     case 1:
//         console.log("Hari Minggu")
//         break
//     case 2:
//         console.log("Hari Senin")
//         break
//     case 3:
//         console.log("Hari Selasa")
//         break
//     case 4:
//         console.log("Hari Rabu")
//         break
//     case 5:
//         console.log("Hari Kamis")
//         break
//     case 6:
//         console.log("Hari Jumat")
//         break
//     case 7:
//         console.log("Hari Sabtu")
//         break
//     default:
//         console.log("Nntau le hari apa")
// };

//JavaScript loop
//for loop
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// };

//while loop
// let i = 1;
// while (i <=10) {
//     console.log(i);
//     i++;
// }

//do while
// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10)


// Contoh Looping for
numbers = [1, 2, 3, 4, 5]
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

//forEach() --> for looping
// numbers.forEach(function(value){
//     console.log(value)
// });

//map() --> mengubah isi array ke array baru
// let output = numbers.map(function(value){
//     return value + 2;
// })

// console.log(output)

//filter()
// let output = numbers.filter(function(value){
//     return value > 2;
// })
// console.log(output)

//find()
let output = numbers.find(function(value){
    return value > 2 && value < 5;
})
console.log(output)
