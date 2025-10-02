function ambilDataUser() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json()) // ubah ke JSON
    .then((data) => {
      data.forEach(({ username, email }) => {
        console.log(`Username: ${username}, Email: ${email}`);
      });
    })
    .catch((error) => {
      console.error("Terjadi error:", error);
    });
}

export default ambilDataUser;

// 1. Mengapa kita butuh .json() setelah fetch()?
// Karena fetch() hanya mengembalikan Response object, bukan data langsung. Kita perlu memanggil .json() untuk mengubah isi response menjadi data JavaScript (array/object).

// 2. Jika API gagal merespons, bagaimana cara menambahkan error handling?
// Bisa tambahkan .catch((error) => {...}) setelah Promise. Dengan begitu, jika fetch gagal (misalnya koneksi error), bisa menangani dengan menampilkan pesan error.