import { useState } from 'react';
import Context from './Context.jsx'
import Profile from './Profile';
function Home() {
    const [nama, setNama] = useState('Faiz');
  return (
    <Context.Provider value={{ nama, setNama }}>
      <div className="p-6 border-2 border-green-500 rounded-lg">
        <h1 className="text-2xl font-bold mb-2">Halaman Home</h1>
        <p className="mb-4 text-lg">
          Nama Santri saat ini di Home: <span className="font-bold text-green-700">{nama}</span>
        </p>

        {/* Render Profile TANPA memberikan props */}
        <Profile />
      </div>
    </Context.Provider>
  )
}

export default Home
