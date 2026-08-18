// useRef digunakan untuk menyimpan nilai yang tidak memerlukan render ulang ketika nilainya berubah.
import  {useRef} from 'react'

function Basic() {
  const inputRef = useRef(null)
  function fokusInput() {
    inputRef.current.focus()
  }

  return (
    <div>
        <input ref={inputRef} />
        <button onClick={fokusInput}>Menyuruh fokus ke input</button>
    </div>
  )
}

export default Basic
