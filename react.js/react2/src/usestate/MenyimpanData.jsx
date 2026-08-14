import React from 'react'

function MenyimpanData() {

    const [Angka, setAngka] = useState(0);
    function tambah() {
        console.log(Angka);
        setAngka(Angka + 1);
    }

  return (
    <div>
      <h1>Menyimpan Data dengan useState</h1>
      <p>Angka: {Angka}</p>
      <button onClick={tambah}>Tambah</button>
    </div>
  )
}

export default MenyimpanData
