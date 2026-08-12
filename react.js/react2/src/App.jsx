
import ProfilePengguna from './components/ProfilPengguna.jsx'

function App() {
  const students = [
    // { id: 1, name: 'Budi', role: 'Ketua' },
    // { id: 2, name: 'Siti', role: 'Wakil Ketua' },
    // { id: 3, name: 'Ayu', role: 'Sekretaris' },
  ]

  return (
    <div>
      {students.length === 0 ? (
        <p>Tidak ada siswa untuk ditampilkan.</p>
      ) : (
        students.map((student) => (
          <ProfilePengguna
            key={student.id}
            id={student.id}
            name={student.name}
            role={student.role}
          />
        ))
      )}
    </div>
  )
}

export default App

// Catatan: Untuk mengganti nama import default, gunakan:
// import { default as HeroComponent } from './components/Hero.jsx'