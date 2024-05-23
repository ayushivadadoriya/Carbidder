import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaSearch} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
// import Login from "../authentication/Login";
// import Profile from "../authentication/profile";
import "./navbar.css"
import SignUp from "../authentication/Signup";

function Navbar() {
    const style = { color: "white" }
    const [showmediaicon, setshowmediaicon] = useState(false)
    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <div id="logo1">Car<span>Bidder</span></div>
                </div>
                <div className={showmediaicon ? "manu mobile-manu" : "manu"}>
                    <div className="xmark" onClick={() => setshowmediaicon(false)}>
                        <FaXmark />
                    </div>
                    <ul>
                        <li><Link to="./home">Home</Link></li>
                        <li><Link to="./about">About</Link></li>
                        <li><Link to="./auction">Auction</Link></li>
                        <li><Link to="./contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="Search">
                    <div className="search-icon"><FaSearch style={style} /></div>
                    <input type="text" ></input>
                </div>
                <div className="profile">
                    <ul>
                        <Link to="./signup" onClick={() => <SignUp />}><CgProfile style={style} /></Link>
                        {/* <Link to="./login" onClick={<Login/>}>LOG IN</Link> */}
                    </ul>
                    <div className="hamburger-manu">
                        <Link onClick={() => setshowmediaicon(!showmediaicon)}><GiHamburgerMenu style={style} /></Link>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Navbar;      