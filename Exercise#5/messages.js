import helloWorld from "./helloWorld.js";

async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}

messages();

//Pertanyaan 1 : Mengapa kita perlu menambahkan await di dalam messages?
//Jawaban 1 : Karena fungsi helloWorld mengembalikan sebuah Promise, sehingga kita perlu menggunakan await untuk menunggu Promise tersebut selesai.

//Pertanyaan 2 : Apa yang terjadi jika await dihapus?
//Jawaban 2 : Jika await dihapus, maka output akan muncul Promise { <pending> }.

//Pertanyaan 3 : Mengapa kita perlu menggunakan export dan import di sini?
//Jawaban 3 : Karena kita ingin menggunakan fungsi helloWorld yang berada di file helloWorld.js di dalam file messages.js, sehingga kita perlu mengekspor fungsi tersebut dari helloWorld.js dan mengimpornya di messages.js.