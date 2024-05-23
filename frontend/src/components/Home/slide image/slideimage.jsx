import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Data from "../data.js"
import "./slideimage.css"

const slideimage = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1700, min: 1250},
            items: 3
        },
        tablet2:{
            breakpoint: { max: 1250, min: 820},
            items: 2
        },
        mobile: {
            breakpoint: { max: 820, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <Carousel responsive={responsive}>
                {
                    Data.map((item) => {
                        return (
                            <>
                                <div className="cart">
                                    <img className="carimage" src={item.img} alt="loading" />
                                    <div className='details'>
                                        <div className="company-name">{item.company}</div>
                                        <div className="model">{item.model}</div>
                                        <button>Bid</button>
                                    </div>
                                </div>
                            </>

                        )
                    })
                }
            </Carousel>
        </>

    )
}

export default slideimage
