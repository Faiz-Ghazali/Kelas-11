import { createContext } from 'react'
import About from './About.jsx'
function Context() {
    const AboutContext = createContext();
    const title = "Tentang Website";
  return (
    <>
    <AboutContext.Provider value={title}>
        <About />
    </AboutContext.Provider>
    </>
  )
}

export default Context
