import React from 'react'
import './cart.css'
import Topbar from '../../components/topbar/Topbar'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import image2 from '../../assets/image2.jpg'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Cart = () => {

    const cart = useSelector((state) => state.cart);
    const [stripeToke, setStripeToke] = useState(null);


   return(
     <>
        <div className="cart">
            <Navbar/>
            <Topbar/>
            <div className="cart-container">
                <h1 className="cart-title">YOUR BAG</h1>
                <div className="cart-row">
                    <button className="cart-btn">CONTINUE SHOPPING</button>
                    <div className="cart-textes">
                        <span href="" className="cart-txt">Shopping Bag (3)</span>
                        <span href="" className="cart-txt">Your Whishlist (5)</span>
                    </div>
                    <button className="cart-btn cart-btn-black">CHECKOUT NOW</button>
                </div>
                <div className="cart-bottom">
                    <div className="cart-info">
                        <div className="cart-product">
                            <div className="cart-product-detail">
                                <img src={image2} alt="" className="cart-product-img" />
                                <div className="cart-detail">
                                    <span className="cart-product-name"><b>Product :</b> NDAMBI UMBA</span>
                                    <span className="cart-product-id"><b>ID :</b> 125466666</span>
                                    <div className="cart-product-color"></div>
                                    <span className="cart-product-size"><b>Size :</b> 45.5</span>
                                    <div className="cart-product-price"><b>Prix :</b>$ 45</div>
                                </div>
                            </div>
                            <div className="cart-product-prices">
                                <div className="cart-amount">
                                    <i className="fas fa-plus product-icon"></i>
                                    <span className="cart-product-amount">4</span>
                                    <i className="fas fa-minus product-icon"></i>
                                </div>
                                <span className="cart-product-prix">$ 45</span>
                            </div>  
                        </div>
                        <hr className="cart-hr"/>
                        <div className="cart-product">
                            <div className="cart-product-detail">
                                <img src={image2} alt="" className="cart-product-img" />
                                <div className="cart-detail">
                                    <span className="cart-product-name"><b>Product :</b> NIKE T-SHIRT</span>
                                    <span className="cart-product-id"><b>ID :</b> 125466666</span>
                                    <div className="cart-product-color cart-bleu"></div>
                                    <span className="cart-product-size"><b>Size :</b> M</span>
                                    <div className="cart-product-price"><b>Prix :</b>$ 45</div>
                                </div>
                            </div>
                            <div className="cart-product-prices">
                                <div className="cart-amount">
                                    <i className="fas fa-plus product-icon"></i>
                                    <span className="cart-product-amount">4</span>
                                    <i className="fas fa-minus product-icon"></i>
                                </div>
                                <span className="cart-product-prix">$ 40</span>
                            </div>  
                        </div>
                    </div>

                    <div className="cart-summary">
                        <h1 className="cart-summary-title">ORDER SUMMARY</h1>
                        <div className="cart-summary-items">
                            <span className="cart-summary-txt">Subtotal</span>
                            <span className="cart-summary-price">$ 40</span>
                        </div>

                        <div className="cart-summary-items">
                            <span className="cart-summary-txt">Estimated Shipping</span>
                            <span className="cart-summary-price">$ 450</span>
                        </div>

                        <div className="cart-summary-items">
                            <span className="cart-summary-txt">Shipping Discount</span>
                            <span className="cart-summary-price">$ 410</span>
                        </div>

                        <div className="cart-summary-items">
                            <span className="cart-summary-txt cart-black">Total</span>
                            <span className="cart-summary-price cart-black">$ 410</span>
                        </div>
                        <button className="cart-summary-btn">CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default Cart