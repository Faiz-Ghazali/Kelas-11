import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function App() {
  const [items, setItems] = useState([0, 1, 2])
  const [parent, enableAnimations] = useAutoAnimate({ duration: 250 })
  const [isEnabled, setIsEnabled] = useState(true)

  const add = () => {
    // Generate ID unik berbasis timestamp biar key selalu aman
    const nextItem = items.length > 0 ? Math.max(...items) + 1 : 0
    setItems((prev) => [...prev, nextItem])
  }

  const remove = (itemToRemove) => {
    setItems((prev) => prev.filter((item) => item !== itemToRemove))
  }

  const toggleAnimation = () => {
    enableAnimations(!isEnabled)
    setIsEnabled(!isEnabled)
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
        
        {/* Header & Status Animasi */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
          <h1 className="text-xl font-bold text-slate-800">Animated List</h1>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full border transition-colors ${
              isEnabled
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : 'bg-slate-100 text-slate-500 border-slate-200'
            }`}
          >
            {isEnabled ? '● Animasi ON' : '○ Animasi OFF'}
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={add}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-medium py-2.5 px-4 rounded-xl shadow-sm transition-all text-sm"
          >
            + Tambah Angka
          </button>
          <button
            onClick={toggleAnimation}
            className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all active:scale-95 border ${
              isEnabled
                ? 'bg-rose-50 hover:bg-rose-100 text-rose-600 border-rose-200'
                : 'bg-slate-800 hover:bg-slate-900 text-white border-transparent'
            }`}
          >
            {isEnabled ? 'Matikan' : 'Aktifkan'}
          </button>
        </div>

        {/* List Container (Attach ref di sini) */}
        <ul ref={parent} className="space-y-2 max-h-80 overflow-y-auto pr-1">
          {items.map((item) => (
            <li
              key={item}
              className="group flex items-center justify-between bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 p-3.5 rounded-xl transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm">
                  {item}
                </span>
                <span className="text-slate-700 font-medium text-sm">
                  Item #{item}
                </span>
              </div>

              <button
                onClick={() => remove(item)}
                className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-rose-500 p-1 rounded-lg transition-all"
                title="Hapus Item"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        {/* Empty State */}
        {items.length === 0 && (
          <p className="text-center text-slate-400 text-sm py-8">
            List kosong. Klik "+ Tambah Angka" untuk mengisi.
          </p>
        )}
      </div>
    </div>
  )
}