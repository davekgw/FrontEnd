//Asynchronous Javascript
//Synchronous -> Single Thread -> Blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3"); //Proses yang memakan waktu lama
// console.log("Proses 4");
//Output: 1, 2, 3, 4

//Asynchronous -> Multi Thread -> Non Blocking
//1. Paralel
// setTimeout(() => {
//     console.log("Proses 1");
// }, 2000);
// setTimeout(() => {
//     console.log("Proses 2");
// }, 2000);
// setTimeout(() => {
//     console.log("Proses 3");
// }, 2000);
// setTimeout(() => {
//     console.log("Proses 4");
// }, 2000);
//Output: 1, 3, 4, 2 (setelah 2 detik)

//2. Concurrent
setTimeout(() => {
    console.log("Proses 1");
    setTimeout(() => {
        console.log("Proses 2");
        setTimeout(() => {
            console.log("Proses 3");
            setTimeout(() => {
                console.log("Proses 4");
            }, 4000); 
        }, 3000); 
    }, 2000); 
}, 2000);
//Output: 1 (setelah 1 detik), 2 (setelah 3 detik), 3 (setelah 6 detik), 4 (setelah 10 detik)

//Callback Hell
//Solusi: Promise, Async/Await
//Promise
const newPromise = new Promise((resolve, reject) => {
    if(true){
        resolve("Promise Berhasil");
    } else {
        reject("Promise Gagal");
    }
});
//Cara Menggunakan Promise
//1. then, catch, finally
newPromise
.then((result) => `${result} !!!`) // Proses 1
.then((result2) => console.log(result2)) // Proses 2
.catch((error) => console.log(error))

//2. async/await
//Harus di dalam function async
// const getData = async () => {
//     try {
//         const result = await newPromise; // Proses 1
//         const result2 = await `${result} !!!`; // Proses 2
//         console.log(result2);
//     } catch (error) {
//         console.log(error);
//     }
//     finally {
//         console.log("Selesai");
//     }
// }
// getData();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error));

//Mini Exercise
//Ubah then catch diatas dengan menggunakan async await
//dan tampilkan field name saja
const getUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        data.forEach(user => console.log(user.name));
    } catch (error) {
        console.log(error);
    }
}
getUsers();