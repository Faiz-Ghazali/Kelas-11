import {useState} from 'react'

function Praktik() {
    const [Nomor, setNomor] = useState(1);
    function pertambahan() {
        setNomor(Nomor + 1);
    }
  return (
    <div>
        <h1> Nilai Awal: 1</h1>
        <button onClick={pertambahan}>
            +
        </button>
        <h1>Hasil: {Nomor}</h1>
    </div>
  )
}

export default Praktik
