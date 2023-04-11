import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import rdc from '../../assets/rdc.jpg'

const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity);

  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <div className="leftbar">
            <div className="leftbarWrapper1">
              <h4 className="leftbarLangue">FR</h4>
              <img src={rdc} alt="" className="leftbar-pays" />
            </div>
            <div className="leftbarWrapper">
              <input type="text" placeholder='search...' className='navbarInput'/>
              <i className="fas fa-search search"></i>
            </div>
          </div>

          <div className="centerbar">
            <h1 className="centerh1" >ACHA MARK.</h1>
          </div>
          
          <div className="rightbar">
            <Link to='/register'><div className='menuItem menuLink'>REGISTER</div></Link>
            <Link to='/login'><div className='menuItem menuLink'>SIGN IN</div></Link>
            <Link to= '/cart'>
              { quantity > 0 &&
              <div className="menuItem">
                <span className="menuItemSpan" >{quantity}</span>
                <i className="fas fa-cart-shopping"></i>
              </div>
              }
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar