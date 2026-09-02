import Profile from './Profile.jsx'
function ProfileDetail({name}) {
  return (
    <div>
        <p>name:</p>
        <Profile name={name} />
    </div>
  )
}

export default ProfileDetail
