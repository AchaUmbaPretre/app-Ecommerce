import React from 'react'
import './slider.css'
import ndambi from '../../assets/ndambi.png'

const Slider = () => {
  return (
    <>
      <div className="slider">
        <div className="slider-wrapper">
          <div className="slider-left">
            <img src={ndambi} alt="" />
          </div>

          <div className="slider-right">
            <h1>SUMMER SALE</h1>
            <span>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</span>
            <button className='slider-btn'>Shop Now</button>
          </div>
        </div>

      </div>

    </>
  )
}

export default Slider