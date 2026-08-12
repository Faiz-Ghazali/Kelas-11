
import ProfilePengguna from './components/ProfilPengguna.jsx'

function App() {
  
  return (
    <>
      
      <ProfilePengguna nama="John Doe" usia="30" pekerjaan="Software Engineer" />
      <ProfilePengguna nama="Jane Smith" usia="28" pekerjaan="Designer" />

    </>
  )
}

export default App
//! kalau ingin custom nama bisa dengan mendefinisikan sebuah function dari import dengan perubahan function name, misal: import { default as HeroComponent } from './components/Hero.jsx'