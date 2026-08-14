import React from 'react'

function Dasar() {
let angka = 0;
function tambah() {
    angka = angka +1;
    console.log(angka)
}
  return (
    <div>
      <h1>Dasar useState</h1>
      <button onClick={tambah}>Tambah</button>
    </div>
  )
}

export default Dasar
