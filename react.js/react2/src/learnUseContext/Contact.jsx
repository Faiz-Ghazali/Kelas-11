import React, {useContext} from 'react'
import AboutContext from './AboutContext.jsx'
function Contact() {
    const contacttitle = useContext(AboutContext)
  return (
    <div>
      <h1>{contacttitle}</h1>
      This is the contact page
    </div>
  )
}

export default Contact
