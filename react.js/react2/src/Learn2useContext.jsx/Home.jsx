import { useState } from "react";
import UserNameContext from "./UserNameContext";
import ProfileDetail from "./ProfileDetail";
import Profile from "./Profile";
function Home() {
  const [name, setName] = useState("faiz");
  return (
    <>
      <Profile />`
      <UserNameContext.Provider value={{name, setName}}>
        <ProfileDetail />
      </UserNameContext.Provider>
    </>
  );
}

export default Home;
