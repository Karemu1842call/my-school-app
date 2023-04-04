import React, {useState } from "react";
import "./style/Login.css";
import LoginForm from "../utilis/LoginForm";
import SignupForm from "../utilis/SignupForm";

function Login({setCurrentuser}) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
{
    showLogin ? (
    <>
          <button onClick={()=>setShowLogin(false)} className="btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-yellow-500">Signup</button>

        <LoginForm setCurrentuser={setCurrentuser}/>
      <br></br>
        </>
    )
    :(
<>
<button onClick={()=>setShowLogin(true)} className="btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-green-500">Login</button>
        <SignupForm setCurrentuser={setCurrentuser} />
      <br></br>
      
    
        </>
    )
}
</>
  )
  
  
}

export default Login