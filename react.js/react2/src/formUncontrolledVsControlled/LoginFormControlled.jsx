import{useState} from 'react'

function LoginFormControlled() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div>
      <form>
        <input type="text" name="Username" className="border border-amber-300" value={username} onChange={(event) => 
        {setUsername(event.target.value);
         console.log(event.target.value);
        }}/>
        <input type="password" name="password" className="border border-amber-800" value={password} onChange={(event) => {
          setPassword(event.target.value);
          console.log(event.target.value);
        }}/>
        <input type="text" name="phone" className="border border-amber-300" value={phone} onChange={(event) => {
          setPhone(event.target.value);
          console.log(event.target.value);
        }}/>    
        <button type="submit" className="border border-amber-200">Login</button>
        </form>
        <h1>{username} </h1>
        <h1>{password}</h1>
        <h1>{phone}</h1>
    </div>
  )
}

export default LoginFormControlled
