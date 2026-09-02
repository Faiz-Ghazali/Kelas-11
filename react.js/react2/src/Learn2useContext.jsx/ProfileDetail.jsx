import  { useContext } from 'react';
import { UserContext } from './UserContext';

function ProfileDetail() {
  // Mengambil data string langsung dari UserContext (tanpa lalu dari props)
  const nama = useContext(UserContext);

  return (
    <div className="border border-blue-400 p-4 rounded-md bg-blue-50">
      <h3 className="text-lg font-bold text-blue-800">Detail Profile Santri</h3>
      <p className="mt-2 text-gray-700">
        Nama Santri: <span className="font-bold text-black">{nama}</span>
      </p>
    </div>
  );
}

export default ProfileDetail;