async function ambilDataUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    
    data.forEach(({ name }) => {
      console.log(`Nama Lengkap: ${name}`);
    });
  } catch (error) {
    console.error("Terjadi error:", error);
  }
}

export default ambilDataUser;

//Apa perbedaan pendekatan Promise chaining dengan async/await?
// Promise chaining → menggunakan .then() berulang. Cocok untuk pemula, tapi kalau terlalu banyak chaining bisa membuat kode sulit dibaca (callback-like).
// Async/Await → sintaks lebih rapi, mirip kode synchronous, lebih mudah dibaca dan dikelola. Error handling juga lebih elegan dengan try...catch.