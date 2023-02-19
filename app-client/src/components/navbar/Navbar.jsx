import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity);
  console.log(quantity)

  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <div className="leftbar">
            <h1><span className="navbar-logo">E</span><span className="navbar-point">..</span>acha</h1>
          </div>

          <div className="centerbar">
            <input className='input-search' type="search" placeholder='Search...' />
            <i className="fas fa-search search"></i>
          </div>
          
          <div className="rightbar">
            <Link to='/register'><div className='menuItem'>REGISTER</div></Link>
            <Link to='/login'><div className='menuItem'>SIGN IN</div></Link>
            <Link to= '/cart'>
              <div className="menuItem">
                <span>{quantity}</span>
                <i className="fas fa-cart-shopping"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar