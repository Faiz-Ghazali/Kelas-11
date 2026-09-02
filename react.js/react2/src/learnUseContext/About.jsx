import { createContext } from "react";
import AboutContext from "./AboutContext.jsx";
function About() {
  const abouttitle = createContext(AboutContext);
  return (
    <div>
      <h1>{abouttitle}</h1>
      Its About now
    </div>
  )
}

export default About
