// 8. Looping
// 8.1 Looping dengan for

// for (let step = 0; step < 5; step++) {
//   // akan dijalankan sebanyak 5 kali, nilai variable step adalah 0 s/d 4.
//   console.log("Step: ", step);
// }

// 8.2 Looping dengan do...while

// let step = 0;
// do {
//   console.log("Step: ", step);
//   step++;
// } while (step < 5);

// 8.3 While statement

// let langkah = 0;
// while (langkah < 5) {
//   console.log(
//     `Cetak baris ke: ${langkah + 1}, nilai variable sebenarnya: ${langkah}.`
//   );
//   langkah++;
// }

// 9. Function
// Function merupakan kumpulan statement untuk melakukan satu tugas tertentu yang akan dijalankan saat kita panggil saja.
// Dua tipe function:
// 9.1 user-defined function (fungsi yang didefinisikan oleh kita)

// Mendeklarasikan fungsi (function declaration)
// function showMessage(message) {
//   console.log(message);
// }
// showMessage("Selamat Siang");

// Function expression
// Function expression akan menjadi nilai dari sebuah variable
// A. Anonymous Function
// const showMessage = function (message) {
//   console.log(message);
// };

// showMessage("ini adalah anonymous function");

// B. Named expression
// const showMessage = function tampilkanPesan(pesan) {
//   console.log(pesan);
// };

// showMessage("coba pesan");

// C. arrow function
// Arrow function selalu anonymous, syntax lebih singkat, dan tidak memiliki this binding.

// const showMessage = (message) => {
//   console.log(message);
// };

// showMessage("Ini contoh arrow function.");

// const showMessage = (message) => {
//   for (let step = 0; step < 10; step++) {
//     console.log(`${message} Cetakan ke ${step + 1}.`);
//   }
// };

// showMessage("Ini contoh arrow function.");

// arrow function dengan satu baris statement, tidak perlu kurung kurawal.
// const showMessage = (message) => console.log(message);

// showMessage("Ini contoh arrow function.");

// mengembalikan nilai dari fungsi (returning a value):
// function square(number) {
//   return number * number;
// }
// console.log(square(9));

// Parameter
// Fungsi parameter adalah untuk memberikan data atau arguments ke sebuah fungsi saat fungsi itu dipanggil.

// function showMessage(message) {
//   // message adalah parameter
//   console.log(message);
// }

// showMessage("Hello Kang Purwo"); // Kata dalam kurung, yaitu 'Hello Kang Purwo' adalah data atau argument yang akan diterima parameter dalam fungsi showMessage. dalam hal ini paramaternya adalah 'message' yang ada di dalam kurung.

// // Default Parameter
// function showMessage(message = "Halo aKang Purwo Ganteng!") {
//   // message adalah parameter, isi defaultnya: Halo aKang Purwo Ganteng!
//   console.log(message);
// }

// showMessage("ini ketika pakai argument"); // pesan yang ditampilkan adalah "ini ketika pakai argument"
// showMessage(); // tidak pakai argument, pesan yang keluar adalah default parameter yaitu "Halo aKang Purwo Ganteng!"

// // REST PARAMETER
// // Rest parameter kita gunakan jika sebuah function mempunyai banyak parameter.

// function showMessage(message = "Hello World", ...parameterSisanya) {
//   // message adalah parameter
//   console.log(message); // Hello World
//   console.log(parameterSisanya); // [1,2,3] sebuah array
// }

// // memberikan beberapa argument saat memanggil fungsi showMessage

// showMessage("Hello JavaScript", 1, 2, 3, "dst");

// VARIABEL DI FUNCTION
// 1. Variable Local: variable yang didefinnisikan di dalam sebuah function hanya bisa diakses di dalam function tersebut.

// function showMessage() {
//   let message = "Hello World"; // hanya bisa diakses di dalam fungsi showMessage
//   console.log(message);
// }

// showMessage();

// 2. Variable outer: sebuah fungsi dapat mengakses variable yang berada di luar function.

// let message = "Hello World";
// function showMessage() {
//   // bisa mengakses variable yang didefinisikan di luar function.
//   console.log(message);
// }
// showMessage();

// // juga bisa mengubah nilai variable yang ada di luar
// let message = "Hello World";

// function showMessage() {
//   // bisa mengakses variable yang didefinikan di luar
//   console.log(message); // Hello World/

//   message = "Hello JavaScript"; // bisa mengubah nilai variable yang di luar

//   console.log(message); // Hello JavaScript
// }

// showMessage();

// // fungsi pada JavaScript akan mengakses variable yang ada di luar jika tidak ditemukan variable yang sama di dalam (lokal).

// let message = "Hello World";
// function showMessage() {
//   // let message = "Hello JavaScript";
//   // akses variable message dari local, jika tidak ada baru akses dari luar
//   console.log(message); // Hello JavaScript
// }

// console.log(message); // Hello World
// // showMessage();

// NESTED FUNCTION

function addSquares(a, b) {}
