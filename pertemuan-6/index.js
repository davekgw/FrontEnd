//Array & Object in JavaScript
//1. Array
//Cara mendeklarasikan array
//Cara 1. Array Literal
let students = ["Dave", "Budz", "Fidel", "Karfel"];
let dave = ["Dave", 21, true, [80, 90, 100]];

//Cara 2. Kata kunci "new"
let employees = new Array(["Dave", "Budz", "Fidel", "Karfel"]);
//Menampilkan semua element array
console.log(students);
//Menampilkan element array berdasarkan index
console.log(students[2]);
//Merubah element array berdasarkan index
dave[2] = false;
console.log(dave);
//Menampilkan element terakhir dalam array
console.log(students.length);
console.log(students[students.length - 1]);

//Array Method
let array = [1, 2, 3, "Hello", false, true];
//1. .toString() - merubah array menjadi string
console.log(array.toString());
//2. .join() - menambahkan element
console.log(array.join(", "));
console.log(array.join(""));
console.log(array.join("-"));
//3. .pop() - menghapus index terakhir
array.pop();
console.log(array);
//4. push() - tambah element terakhir
array.push("Selamat sore");
console.log(array);
//5. shift() - menghapus element pertama
array.shift();
console.log(array);
//6. unshift() - tambah element pertama
array.unshift("Oke");
console.log(array);
//7. splice() - menghapus element tengah
array.splice(3, 0, 4);
console.log(array);
//8. slice()
let num = array.slice(1, 4);
console.log(num);
//9. concat() - menggabungkan array
let num1 = [1, 2, 3]
let num2 = [4, 5, 6]
let num3 = [7, 8, 9]
combine = num1.concat(num2, num3)
console.log(combine)

//2. Object -> memiliki property & value
let daveObj = {
    fullName: "Dave A. M",
    age: 22,
    isActive: true,
    grade: [1, 2, 3],
    address: {
        street: "Jl. Arnold Mononutu",
        city: "Airmadidi",
        province: "Sulawesi Utara",
    },
    sayHello: function(){
        console.log("Hello my name is " + this.fullName);
    }
};
//Cara mengakses element dalam object
//Cara 1. Dot notation
console.log(daveObj.fullName);
//mengakses array dalam object
console.log(daveObj.grade[1]);
//mengakses object dalam object
console.log(daveObj.address.street);
//memanggil fungsi dalam object
daveObj.sayHello();
//Cara 2. Bracket notation
console.log(daveObj["fullName"]);
console.log(daveObj["grade"][2]);
console.log(daveObj["address"]["city"]);
daveObj["sayHello"]();

daveObj.job = "Programmer"; //jika property tidak ada akan di tambahkan
delete daveObj.isActive; //menghapus property yang ada
console.log(daveObj);
