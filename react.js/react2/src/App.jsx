// import {RouterProvider} from "react-router";
// import {router} from './router'
import AboutContext from './learnUseContext/ABoutCOntext.jsx';
function App() {

  return (
    <AboutContext.Provider value={"Tentang Website"}>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard Aplikasi</h1>
      </div>
    </AboutContext.Provider>
  )
}

export default App