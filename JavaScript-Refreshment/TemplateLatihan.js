//* soal 1
const umur = undefined;
console.log(umur ?? 18);
//* soal 2
const stok = 5;
let jumlahstok = stok > 0 ? "Stok Tersedia" : "Stok habis";
console.log(jumlahstok);
//* soal 3
const buah1 = ["Apel", "Jeruk"];
const buah2 = ["Mangga", "Pisang"]; 
const semuaBuah = [...buah1, ...buah2];
console.log(semuaBuah);
function tampilkanAngka(...angka) {
  console.log(angka);
}
tampilkanAngka(1, 2, 3, 4, 5);
//* soal 4
function penambahan(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
console.log(penambahan(10, 20));
const pertambahan = (number1, number2) => number1 + number2;
console.log(pertambahan(5, 5));