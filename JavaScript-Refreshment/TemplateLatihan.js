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
function tampilkanNomor(...nomor) {
  console.log(nomor);
}
tampilkanNomor(1, 2, 3, 4, 5);
//* soal 4
function penambahan(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
console.log(penambahan(10, 20));
const pertambahan = (number1, number2) => number1 + number2;
console.log(pertambahan(5, 5));
//* soal 5
const angka = [10,20,30]; 
console.log(angka[0]);
console.log(angka[1]);
console.log(angka[2]);
const [angka1, angka2, angka3] = angka;
console.log(angka1);
const siswa = {
    nama: "Ahmad",
    umur: 16
};
console.log(siswa.nama);
console.log(siswa.umur);
const {nama, umur} = siswa;
console.log(nama);
console.log(umur);