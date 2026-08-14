import React from 'react'
import { useState } from 'react'
function Dasar() {
const [angka, setAngka] = useState(0);
function tambah() {
    angka = angka + 1;
    console.log(angka);
    setAngka(angka + 1);
}
  return (
    <div>
      <h1>Dasar useState</h1>
      <button onClick={tambah}>Tambah</button>
    </div>
  )
}

export default Dasar
