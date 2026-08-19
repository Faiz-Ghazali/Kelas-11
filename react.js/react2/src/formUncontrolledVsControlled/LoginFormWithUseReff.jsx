import {useRef} from  'react';
function LoginFormWithUseReff() {
  
    
    const UsernameRef = useRef();
    const handlerSubmit = (e) => {
      e.preventDefault();
      console.log(UsernameRef.current.value);
    }
    return (
    <div>
        <form onSubmit={handlerSubmit}>
        <input type="text" name="Username" className="border border-amber-300" ref={UsernameRef}/>
        <input type="password" name="password" className="border border-amber-800"/>
        <button type="submit" className="border border-amber-200">Login</button>
        </form>
    </div>
  )
}

export default LoginFormWithUseReff
//! Uncontrolled component adalah input yang nilainya dikontrol oleh DOM bukan oleh React UseState