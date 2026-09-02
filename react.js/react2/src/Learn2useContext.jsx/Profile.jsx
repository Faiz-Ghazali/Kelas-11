import ProfileDetail from './ProfileDetail';

function Profile() {
  return (
    <div className="border p-4 rounded-lg bg-gray-50">
      <h2 className="text-xl font-semibold mb-2">Komponen Profile</h2>
      {/* Komponen ProfileDetail dipanggil langsung tanpa props */}
      <ProfileDetail />
    </div>
  );
}

export default Profile;