import { createContext } from 'react'
import AboutContext from './AboutContext.jsx'
import Testimonial from './Testimonial.jsx'

function Context() {
    const [title, setTitle] = createContext(AboutContext);
  return (
    <>
    <AboutContext.Provider value={{ title, setTitle }}>
        <Testimonial />
    </AboutContext.Provider>
    </>
  )
}
export default Context