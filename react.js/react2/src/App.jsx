import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Card from './components/Card.jsx'
import ProfilePengguna from './components/ProfilPengguna.jsx'
function Halo() {
  return (
    <>
    <h1>Halo Dunia </h1>
    </>
  )
}
function App() {
  
  return (
    <>
      <Navbar />
      <h1>Hello React</h1>
      <Halo />
      <Hero />
      <Footer />
      <Card />
      <ProfilePengguna nama="John Doe" usia="30" pekerjaan="Software Engineer" />
      <ProfilePengguna nama="Jane Smith" usia="28" pekerjaan="Designer" />

    </>
  )
}

export default App
//! kalau ingin custom nama bisa dengan mendefinisikan sebuah function dari import dengan perubahan function name, misal: import { default as HeroComponent } from './components/Hero.jsx'