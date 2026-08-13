import React from 'react'

function ListData({ name, kelas, hobi, aktif }) {
  return (
    <div>
      <React.Fragment>
        ============================
        <p>Nama: {name}</p>
        <p>Kelas: {kelas}</p>
        <p>Hobi: {hobi}</p>
        <p>Status: {aktif ? 'Aktif' : 'Tidak Aktif'}</p>
        ============================
      </React.Fragment>
    </div>
  )
}

export default ListData