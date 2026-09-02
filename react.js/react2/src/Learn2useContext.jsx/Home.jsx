import { UserContext } from './UserContext';
import Profile from './Profile';
function Home() {
    const name ="Rico";
  return (
    <UserContext.Provider value={name}>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Halaman Utama (Home)</h1>
        {/* Render Profile TANPA memberikan props */}
        <Profile />
      </div>
    </UserContext.Provider>
  )
}

export default Home
