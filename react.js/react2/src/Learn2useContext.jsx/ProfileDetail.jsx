import { useContext } from "react";
import UserNameContext from "./UserNameContext";
function ProfileDetail() {
  const { name, setName } = useContext(UserNameContext);
  return (
    <div className="p-4 border border-blue-400 rounded bg-blue-50">
      <h1>Nama user: {name}</h1>
      <button onClick={() => setName("faiz")}>Ganti nama</button>
    </div>
  );
}

export default ProfileDetail;
