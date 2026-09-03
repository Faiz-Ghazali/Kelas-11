// import { useState } from 'react';
import UserNameContext from './UserNameContext';
import ProfileDetail from './ProfileDetail';
import Profile from './Profile';
function Home() {
    const nama = "Faiz";
  return (
    
      <>
      <Profile />
      <UserNameContext.Provider value={nama}>
      <ProfileDetail />
      </UserNameContext.Provider>
      </>
      
    
  )
}

export default Home
