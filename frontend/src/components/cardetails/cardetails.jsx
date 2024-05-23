import React from 'react'
import { useLocation } from 'react-router-dom'
import "./cardetails.css"

const Cardetails = () => {
    const location=useLocation();
    const item = location.state.id;
  return (
    <>
    <div className="container-car">
        <div className="car-image">
            <img src={item.img} alt="loading" />
        </div>
        <div className="cardetails">
            <div className="company-header">{item.company}{" "}<span className='span1'>{item.model}</span></div>
            <div className="car_componant"><span className='span2'>Manufecture year : </span>{item.manufectureyear}</div>
            <div className="car_componant"><span className='span2'>Color : </span>{item.color}</div>
            <div className="car_componant"><span className='span2'>Fule : </span>{item.fule}</div>
            <div className="car_componant"><span className='span2'>Kilometers : </span>{item.killometers}</div>
            <div className="car_componant"><span className='span2'>Intial bid amount:</span>{item.intialbid}</div>
            <button className='bid_button'>Bid</button>
        </div>
    </div>
    </>
  )
}

export default Cardetails