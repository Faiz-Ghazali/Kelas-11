import  { useState } from 'react'
function PraktikTwo() {
    const [name, setName] = useState("Ali");
    function changeName() {
        
        setName("fulan");
    }

  return (
    <>
    <div>
      {name}
    </div>
    <button onClick={changeName}>Change Name</button>
    </>
  )
}

export default PraktikTwo
