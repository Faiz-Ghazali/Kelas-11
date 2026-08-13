
import ProfilePengguna from './components/ProfilPengguna.jsx'

function App() {
  const students = [
    { id: 1, name: 'Ahmad', kelas: 12, hobi:'coding', aktif: true },
    { id: 2, name: 'Ali', kelas: 11, hobi:'membaca', aktif: false },
    { id: 3, name: 'Umar', kelas: 10, hobi:'Olahraga', aktif: true },
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