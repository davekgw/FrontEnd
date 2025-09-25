// ===== Array Exercise =====
let orang = ["Greg", "Mary", "Devon", "James"];

// 1. For-loop untuk menampilkan semua orang
for (let i = 0; i < orang.length; i++) {
  console.log(orang[i]);
}

// 2. forEach untuk menampilkan semua orang
orang.forEach(person => console.log(person));

// 3. Menghapus "Greg"
orang.shift();

// 4. Menghapus "James"
orang.pop();

// 5. Menambahkan "Matt" di depan array
orang.unshift("Matt");

// 6. Menambahkan Dave di akhir array
orang.push("Dave");

// 7. For-loop menampilkan orang dan berhenti setelah "Mary"
for (let i = 0; i < orang.length; i++) {
  console.log(orang[i]);
  if (orang[i] === "Mary") {
    break;
  }
}

// 8. Membuat salinan array tanpa "Matt" dan "Mary"
let salinan = orang.slice(2);

// 9. Mengembalikan orang ke nilai awal
orang = ["Greg", "Mary", "Devon", "James"];

// Menghapus "Devon" dan menambahkan "Elizabeth" dan "Artie"
orang.splice(2, 1, "Elizabeth", "Artie");

// Menambahkan "Matt" di depan dan Dave di akhir
orang.unshift("Matt");
orang.push("Dave");

// orang sekarang: ["Matt", "Mary", "Elizabeth", "Artie", "Dave"]

// 10. Membuat variabel denganBob yang menggabungkan orang dengan "Bob"
let denganBob = orang.concat("Bob");

// Menampilkan hasil akhir denganBob
console.log(denganBob); 
// Output: ["Matt", "Mary", "Elizabeth", "Artie", "Dave", "Bob"]


// ===== Object Exercise =====
let data = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1. Menambahkan bahasa baru
data.languages.push("Go");

// 2. Mengubah difficulty menjadi 7
data.difficulty = 7;

// 3. Menambahkan properti isFun
data.isFun = true;

// 4. Menghapus properti jokes
delete data.jokes;

// 5. Menampilkan semua bahasa pemrograman
data.languages.forEach(lang => console.log(lang));

// 6. Menampilkan semua kunci objek
for (let key in data) {
  console.log(key);
}

// 7. Menampilkan semua nilai objek
for (let key in data) {
  console.log(data[key]);
}