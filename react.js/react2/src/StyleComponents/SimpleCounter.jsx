import { useState, useEffect } from 'react'
function SimpleCounter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(()=> {
            console.log("tunggu sebentar")
        }, 5000);
        return () => {
            clearTimeout
        }
    }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      
    </div>
  )
}

export default SimpleCounter
