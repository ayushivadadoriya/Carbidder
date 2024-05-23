import React, { useState} from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import image1 from "../images/background1.png"

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault()
        if (username === "" || email === "" || contact === "" || password === "") {
            alert("please all record fill.......")
        }
        else{
            axios.post("http://localhost:3001/register", { username, email, contact, password })
            .then(result => {
                console.log(result)
                    navigate("/home")
            })
            .catch(err => console.log(err))
        }
        
    }

    // useEffect(() => {
    //     document.body.style.overflowY = "hidden";
    //     return () => {
    //         document.body.style.overflowY = "scroll";
    //     }
    // }, []);
    return (
        <>
            <div className="model-container">
                <div className="image-container">
                    <img src={image1} alt="backgroung" width="100%"/>
                </div>
                <div className="form">
                    <h3>SIGN UP</h3>
                    <form onSubmit={handleSubmit}>
                        <input className="input" type="text" name="Usename" id="Usename" placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
                        <br />
                        <input className="input" type="email" name="Email" id="Email" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} />
                        <br />
                        <input className="input" type="number" name="contact" id="contact" placeholder='Contact Number' onChange={(e) => setContact(e.target.value)} />
                        <br />
                        <input className="input" type="password" name="password" id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        <p className='password-edit'>Forgot Password?</p>
                        <button className="btn" type="submit">Sign up</button>
                        <br />
                        <div className="already-account">
                            Already Account??
                            <Link to="../login" onClick={()=>navigate("./login")}> Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp
