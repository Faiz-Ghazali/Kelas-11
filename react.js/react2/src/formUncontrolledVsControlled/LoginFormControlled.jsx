import{useState} from 'react'

function LoginFormControlled() {
  const [username, setUsername] = useState();

  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input type="text" name="Username" className="border border-amber-300" value={username} onChange={(event) => { setUsername(event.target.value); }}/>
        <input type="password" name="password" className="border border-amber-800"/>
        <button type="submit" className="border border-amber-200">Login</button>
        </form>
    </div>
  )
}

export default LoginFormControlled
