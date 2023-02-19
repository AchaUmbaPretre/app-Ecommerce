import React from 'react'
import './footer.css'
import master from '../../assets/master.jpg'
import america from '../../assets/america.jpg'
import visa from '../../assets/visa.jpg'
import western from '../../assets/western.jpg'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="footer-left">
                <h3 className="footer-logo"><span className="navbar-logo">E</span>-acha</h3>
                <p className="footer-desc">The are many variations of Lorem Ipsum available, but the majority have suffered
                alteration in some from, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <div className="footer-reseaux">
                    <div className="footer-icon">
                        <i className="fa-brands fa-facebook-square face"></i>
                    </div>
                    <div className="footer-icon">
                        <i className="fa-brands fa-instagram-square insta"></i>
                    </div>
                    <div className="footer-icon">
                        <i className="fa-brands fa-twitter-square twitter"></i>
                    </div>
                    <div className="footer-icon">
                        <i className="fa-brands fa-linkedin link"></i>
                    </div>

                </div>
            </div>
            <div className="footer-center">
                <h3 className="footer-logo-center">Useful links</h3>
                <ul className="footer-center-container">
                    <li>Home</li>
                    <li>Man fashion</li>
                    <li>Accessories</li>
                    <li>Order Tracking</li>
                    <li>Wishlist</li>
                    <li>Cart</li>
                    <li>Woman Fashion</li>
                    <li>My Account</li>
                    <li>Wishlist</li>
                    <li>Terms</li>
                </ul>
            </div>
            <div className="footer-right">
                <h3>Contact</h3>
                <div className="footer-location">
                    <i className="fas fa-location-dot icon-location"></i>
                    <span className="footer-right-desc">40 Q.Debonhomme C.Matete Kin</span>
                </div>
                <div className="footer-location">
                    <i className="fas fa-phone icon-phone"></i>
                    <span className="footer-right-desc">+243824562776</span>
                </div>
                <div className="footer-location">
                    <i className="fas fa-envelope"></i>
                    <span className="footer-right-desc">achandambi@gmail.com</span>
                </div>
                <div className="footer-location">
                    <img src={master} alt="" className="footer-banques" />
                    <img src={america} alt="" className="footer-banques" />
                    <img src={western} alt="" className="footer-banques" />
                    <img src={visa} alt="" className="footer-banques" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer