import { Toast } from "radix-ui";
import { useState, useEffect } from 'react'
function SimpleCounter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if(count > 0) {
            alert(`Score berubah dari angka ${count} ke angka: ${count}`)
        }
    }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <Toast.Provider>
		<Toast.Root>
			<Toast.Title />
			<Toast.Description />
			<Toast.Action />
			<Toast.Close />
		</Toast.Root>

		<Toast.Viewport />
	</Toast.Provider>
    </div>
  )
}

export default SimpleCounter
