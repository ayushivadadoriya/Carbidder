import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image1 from "../images/background1.png"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import SignUp from './Signup';
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(email === "" || password === ""){alert("please fill all records.......")}
    else{
      axios.post("http://localhost:3001/login",{email,password})
    .then(result=> {console.log(result)
      if (result.data === "Success"){
          navigate("/home")
      }
      alert(result.data )
    })
    .catch(err => console.log(err))
    }
    
}
  return (
    <>
            <div className="model-container">
              <div className="image-container">
                <img src={image1} alt="background" width="100%"/>
              </div>
              <div className="form">
                <h3>Login</h3>
                <form onSubmit={handleSubmit}>
                  <input className="input" type="email" name="Email" id="Email" placeholder='Email Address' onChange={(e)=>setEmail(e.target.value)} />
                  <br />
                  <input className="input"  type="password" name="password" id="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                  <p className='password-edit'>Forgot Password?</p>
                  <button className="btn" type="submit">Login</button>
                  <br />
                  
                  <div className="already-account">
                          No Account??
                        <Link to = "../signup" onClick={()=>navigate(<SignUp />)}> SignUp</Link> 
                  </div>
                </form>
              </div> 
            </div>
    </>
)
}

export default Login
