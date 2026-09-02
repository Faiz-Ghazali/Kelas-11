import ProfileDetail from './ProfileDetail';

function Profile() {
  return (
    <div className="p-4 border border-gray-300 rounded bg-gray-50 my-2">
      <h2 className="text-xl font-semibold mb-2">Komponen Profile (Perantara)</h2>
      <ProfileDetail />
    </div>
  );
}

export default Profile;