import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
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

    </>
  )
}

export default App
