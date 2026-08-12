import React from 'react'

function ProfilPengguna({ name, role}) {
  return (
    <div>
      <React.Fragment>
        <p>Nama: {name}</p>
        <p>Usia: {role}</p>
        <p>Pekerjaan: {role}</p>
      </React.Fragment>
    </div>
  )
}

export default ProfilPengguna
