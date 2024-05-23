import React, { useState } from 'react'
import "./addauctionform.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import Home from "../Home/home"

const Addauction = () => {
    const [name, setName] = useState("");
    const [useremail, setUseremail] = useState("");
    const [contactno, setContactno] = useState("");
    const [emailpassword, setEmailpassword] = useState("");
    const [companyname, setCompanyname] = useState("")
    const [color, setColor] = useState("")
    const [model, setModel] = useState("")
    const [fule, setFule] = useState("")
    const [manufectureyear, setManufectureyear] = useState("")
    const [kilometers, setKilometers] = useState("")
    const [initialbid, setIntialbid] = useState("")
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault()
        if (name === "" || useremail === "" || contactno === "" || emailpassword === "" || companyname === "" || color === "" || model === "" || fule === "" || manufectureyear === "" || kilometers === "" || initialbid === "") {
            alert("please all record fill.......")
        }
        else {
            axios.post("http://localhost:3001/addaution", { name, useremail, contactno, emailpassword, companyname, color, model, fule, manufectureyear, kilometers, initialbid })
                .then(result => {
                    console.log(result)
                    navigate("/auction")
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
            <div className="main-form">
                <h1>Add Auction</h1>
                <div className="form">
                    <h3 className='heading'>Personal details</h3>
                    <form onSubmit={handleSubmit}>
                        <label className='label'>Username:</label>
                        <input className="input" type="text" name="Username" id="Username" onChange={(e) => setName(e.target.value)} />
                        <br />
                        <label className='label'>Email:</label>
                        <input className="input" type="email" name="Email" id="Email" onChange={(e) => setUseremail(e.target.value)} />
                        <br />
                        <label className='label'>Contact no:</label>
                        <input className="input" type="number" name="contact" id="contact" onChange={(e) => setContactno(e.target.value)} />
                        <br />
                        <label className='label'>Password</label>
                        <input className="input" type="password" name="password" id="password" onChange={(e) => setEmailpassword(e.target.value)} />
                        <br />


                        <div className='car-details'>
                            <h3 className='heading'>Car details</h3>

                            <label className='label'>Company:</label>
                            <input className="input" type="text" name="Company" id="Company" onChange={(e) => setCompanyname(e.target.value)} />
                            <br />
                            <label className='label'>Color:</label>
                            <input className="input" type="text" name="Color" id="Color" onChange={(e) => setColor(e.target.value)} />
                            <br />
                            <label className='label'>Model:</label>
                            <input className='input' type='text' name='Model' id='Model' onChange={(e) => setModel(e.target.value)} />
                            <br />
                            <label className='label'>Fule:</label>
                            <input className='input' type='text' name='Fule' id='Fule' onChange={(e) => setFule(e.target.value)} />
                            <br />
                            <label className='label'>Manufecture-year:</label>
                            <input className="input" type="number" name="Manufectureyear" id="Manufectureyear" onChange={(e) => setManufectureyear(e.target.value)} />
                            <br />
                            <label className='label'>Kilometers:</label>
                            <input className="input" type="number" name="Kilometers" id="Kilometers" onChange={(e) => setKilometers(e.target.value)} />
                            <br />
                            <label className='label'>Initial-bid:</label>
                            <input className="input" type="number" name="Intialbid" id="Intialbid" onChange={(e) => setIntialbid(e.target.value)} />
                            <br />

                            <br />
                            <button onClick={() => <Home />} className="btn" type="submit">Sent request</button>
                        </div>
                    </form>
                </div>
                <p>Note:You have given the details of your car you will be notified whenever your car will be on auction.</p>
            </div>
        </>
    )
}

export default Addauction
