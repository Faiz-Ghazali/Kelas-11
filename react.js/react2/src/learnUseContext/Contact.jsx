import { useContext } from 'react'
import AboutContext from './AboutContext.jsx'
function Context() {
    const abouttitle = useContext(AboutContext);
  return (
    <>
    <div className="p-4 border border-gray-300 rounded-lg max-w-sm">
      <h2 className="text-xl font-semibold">Profil Santri</h2>
      <p className="mt-2">Now<span className="font-bold">{abouttitle}</span></p>
    </div>
    </>
  )
}
export default Context