import React from 'react'
import "./home.css"
import Timer from "./timer"
import image from "../images/homeimg1.png"
import About from "../About/about"
import Slideimage from './slide image/slideimage'
// import Addauction from '../Auction/addauctionform'
import { Link } from 'react-router-dom'

function Home(){

  // const navigate = useNavigate()
  return (
    <>
    <div className='img'>
        <img src={image} alt='homeimg' width="100%"></img>
        <div>THE ONLINE CAR AUCTION <span>FOR DEALERS</span></div>
        <div className='timer'><Timer duration={24 * 60 * 60 * 1000}/></div>    
    </div>
    <div className='container'>
        <div className='text-column'>
          <h3>Bid</h3>
          <p>Click on start bid and see all the live auctions going on and start bidding.</p>
          <Link to="../auction"><button>Start bid</button></Link>
        </div>
        <div className='text-column'>
          <h3>Add</h3>
          <p>Click on add auction to send request to host to sell your car in best price.</p>
          <Link to="../addauction"><button> Add auction</button></Link>
        </div>
    </div>
        <Slideimage/>
        <About />
    </>
  )
}


export default Home
