import {useState} from 'react'

function Praktik() {
    const [Nomor, setNomor] = useState(0);
    function pertambahan() {
        setNomor(Nomor + 1);
    }
    function kelipatanDua() {
        setNomor(Nomor + 2);
    }
  return (
    <div>
        <h1> Nilai Awal: 1</h1>
        <button onClick={pertambahan}>
            Tambah Satu
        </button>
        <br></br>
        <button onClick={kelipatanDua}>
            Tambah Dua
        </button>
        <br></br>
        <button onClick={function KelipatanTiga() {
            setNomor(Nomor + 3);
        }}>
            Tambah Tiga
        </button>
        <h1>Hasil: {Nomor}</h1>
    </div>
  )
}

export default Praktik
