import { createContext } from 'react'
import About from './About.jsx'
function Context() {
    const AboutContext = createContext();
    const title = "About Page";
  return (
    <>
    <AboutContext.Provider value={title}>
        <About />
    </AboutContext.Provider>
    </>
  )
}

export default Context
