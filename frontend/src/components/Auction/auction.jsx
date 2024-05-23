import React from 'react'
import data from "../Home/data"
// import image from "../images/background.png"
import "./auction.css"
import { useNavigate } from 'react-router-dom';

function Auction() {
  const navigate=useNavigate();
  return (
    <div>
      {

        data.map((item) => {
          return (
            <button className="cart-conatiner" onClick={()=>navigate("../cardetails" ,{state:{id : item}})}>
              <div className="image"><img src={item.img} alt=""  height="400px"/></div>
              <div className="description">
                <div className="name">{item.company}</div>
                <div className="model-name">{item.model}</div>
                <div className="fuel">{item.fule}</div>
                <div className="color">{item.color}</div>
              </div>
            </button>
          )
        })
      }



    </div>
  )
}

export default Auction
