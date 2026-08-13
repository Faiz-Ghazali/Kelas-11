import ListData from './components/ListData'
function App() {
  const santris = [
    { id: 1, name: 'Ahmad', kelas: 'XI', hobi:'coding', aktif: true },
    { id: 2, name: 'Ali', kelas: 'XII', hobi:'membaca', aktif: false },
    { id: 3, name: 'Umar', kelas: 'X', hobi:'Olahraga', aktif: true },
  ]

  return (
    <div>
      {santris.length === 0 ? (
        <p>Tidak ada santri untuk ditampilkan.</p>
      ) : (
        santris.map((santri) => (
          <ListData
            key={santri.id}
            name={santri.name}
            kelas={santri.kelas}
            hobi={santri.hobi}
            aktif={santri.aktif}
          />
        ))
      )}
    </div>
  )
}

export default App