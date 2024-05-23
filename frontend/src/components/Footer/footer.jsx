import React from 'react'
import "./footer.css"
import { FaFacebook , FaInstagramSquare , FaLinkedin , FaTwitter} from "react-icons/fa";

const footer = () =>{
  return (
    <>
      <div className="conatainer">
        <div className="first">
          <h3>Page link</h3>
          <div><a href='#'>Home</a></div>
          <div><a href='#'>About</a></div>
          <div><a href='#'>Auction</a></div>
          <div><a href='#'>Contect</a></div>
        </div>
        <div className="second">
          <h3>Explore</h3>
          <div><a href='#'>Live auction</a></div>
          <div><a href='#'>Add auction</a></div>
          <div><a href='#'>Updates</a></div>*
        </div>
        <div className="third">
          <h3>Legal</h3>
          <div><a href='#'>Privacy</a></div>
          <div><a href='#'>Refund privacy</a></div>
          <div><a href='#'>Cookie privacy</a></div>
        </div>
        <div className="fourth">
          <div id="logo">Car<span>Bidder</span></div>
          <a href='#'><FaFacebook /></a>
          <a href='#'><FaInstagramSquare /></a>
          <a href='#'><FaTwitter /></a>
          <a href='#'><FaLinkedin /></a>
        </div>
      </div>
    </>
  )
}

export default footer;