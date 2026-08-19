// useRef digunakan untuk menyimpan nilai yang tidak memerlukan render ulang ketika nilainya berubah.
import  {useRef} from 'react'

function Basic() {
  const inputRef = useRef(null) //?membuat referensi ke elemen input
  function fokusInput() {
    // inputRef.current adalah elemen input yang direferensikan, dan kita memanggil metode focus() untuk memfokuskan input tersebut.
    inputRef.current.focus()
  }

  return (
    <div>
        <input ref={inputRef} /> {/* Menghubungkan referensi ke elemen input */}
        <button onClick={fokusInput}>Menyuruh fokus ke input</button>
    </div>
  )
}

export default Basic
