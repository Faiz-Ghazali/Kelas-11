import React from 'react'

function ProfilPengguna(props) {
  return (
    <div>
      <React.Fragment>
        <p>Nama: {props.nama}</p>
        <p>Usia: {props.usia}</p>
        <p>Pekerjaan: {props.pekerjaan}</p>
      </React.Fragment>
    </div>
  )
}

export default ProfilPengguna
