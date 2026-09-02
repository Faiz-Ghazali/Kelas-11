import {useContext} from 'react';
import Context from './Context.jsx';
function ProfileDetail() {
  // Ambil fungsi 'setNama' langsung dari UserContext
  const { setNama } = useContext(Context);

  return (
    <div className="p-4 border border-blue-400 rounded bg-blue-50">
      <h3 className="text-lg font-bold text-blue-800">Komponen ProfileDetail</h3>
      <p className="text-sm text-gray-600 mb-3">Klik tombol di bawah untuk mengubah data di Home:</p>

      <div className="flex gap-2">
        <button 
          onClick={() => setNama("Ali")}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Ubah ke Ali
        </button>

        <button 
          onClick={() => setNama("Umar")}
          className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Ubah ke Umar
        </button>
      </div>
    </div>
  );
}

export default ProfileDetail;