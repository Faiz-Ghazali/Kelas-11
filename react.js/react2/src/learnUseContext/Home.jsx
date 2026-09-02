import { useState } from 'react'
import Profile from './learnUseContext/Profile.jsx'
function App() {
  const [name, setName] = useState('Fulan')

  return (
    <div>
        <h1 className="text-3xl font-bold underline">{name} </h1>
        <button onClick={() => setName('Ali')}>Change</button>
        <Profile name={name} />
    </div>
  )
}

export default App