//* Array adalah sebuah daftar data dibuat dengan simbol []
const fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits); 
console.log(fruits[0]); // Output: Apple
//* Object adalah sebuah daftar data yang memiliki key dan value dibuat dengan simbol {}
const siswa = {
    firstName: 'Ahmad',
    alamat: 'Jakarta',
    age: 25
};
console.log(siswa); 
console.log(siswa.alamat);
//? ---------------------------------------------------------
//* Destructure dengan Array
const kantong = ['Pensil', 'Pulpen', 'Penghapus'];
console.log(kantong[0]);
console.log(kantong[1]);
console.log(kantong[2]);
const [Pensil, Pulpen, Penghapus] = kantong;
console.log(Pensil);
const [firstName, alamat, age] = siswa;
console.log(nama);
console.log(nama.alamat);    

