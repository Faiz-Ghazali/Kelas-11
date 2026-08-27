import { useParams } from "react-router";

// Data santri diletakkan di luar komponen (atau berasal dari file data terpisah)
const santri = {
  1: "Ahmad",
  2: "Ali",
  3: "Umar",
};

function ProfileDetail() {
  // 1. Ambil ID dari URL browser
  const { id } = useParams();

  // 2. Cari nama santri berdasarkan ID yang didapat
  const nama = santri[id];

  return (
    <>
      <h1>Profile Santri</h1>
      <p>Nama: {nama}</p>
      <p>ID: {id}</p>
    </>
  );
}

export default ProfileDetail;