import { Button } from '@radix-ui/themes';
import { useState, useEffect } from 'react'
function SimpleCounter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`Count berubah menjadi: ${count}`)
    }, []);
  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <Button onClick={() => setCount(count - 1)}>-</Button>
    </div>
  )
}

export default SimpleCounter
