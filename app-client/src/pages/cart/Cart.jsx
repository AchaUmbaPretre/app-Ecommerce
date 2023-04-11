import React, { useEffect } from 'react'
import './cart.css'
import Topbar from '../../components/topbar/Topbar'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { userRequest } from '../../methodeRequest'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const cart = useSelector((state) => state.cart);
    const [stripeToke, setStripeToke] = useState(null);
    const KEY = process.env.REACT_APP_STRIPE;
    const navigate = useNavigate();

    const onToken = (token) =>{
        setStripeToke(token)
    }

    useEffect(() =>{
        const makeRequest = async () =>{
            try{
                const res = await userRequest.post("/checkout/payment", {
                    tokenId : stripeToke.id,
                    amount : cart.total * 100,
                });
                navigate('/success', {data: res.data});
            }
            catch(error){
                console.log(error)
            }
        }
        stripeToke && makeRequest();
    }, [stripeToke, cart.total, navigate]);

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
                    <button type='filled' className="cart-btn cart-btn-black">CHECKOUT NOW</button>
                </div>
                
                <div className="cart-bottom">
                    { cart.products.map(product =>(

                    <div className="cart-info">
                        <div className="cart-product">
                            <div className="cart-product-detail">
                                <img src={product.img} alt="" className="cart-product-img" />
                                <div className="cart-detail">
                                    <span className="cart-product-name"><b>Product :</b> {product.title}</span>
                                    <span className="cart-product-id"><b>ID :</b> {product._id}</span>
                                    <div className="cart-product-color">{product.color}</div>
                                    <span className="cart-product-size"><b>Size :</b> {product.size}</span>
                                    <div className="cart-product-price"><b>Prix :</b>$ {product.price}</div>
                                </div>
                            </div>
                            <div className="cart-product-prices">
                                <div className="cart-amount">
                                    <i className="fas fa-plus product-icon"></i>
                                    <span className="cart-product-amount">{product.quantity}</span>
                                    <i className="fas fa-minus product-icon"></i>
                                </div>
                                <span className="cart-product-prix">$ {product.price * product.quantity}</span>
                            </div>  
                        </div>
                        <hr className="cart-hr"/>
                    
                    </div>
                    ))}
                    <div className="cart-summary">
                        <h1 className="cart-summary-title">ORDER SUMMARY</h1>
                        <div className="cart-summary-items">
                            <span className="cart-summary-txt">Subtotal</span>
                            <span className="cart-summary-price">$ {cart.total}</span>
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
                            <span className="cart-summary-price cart-black">$ {cart.total}</span>
                        </div>
                        <StripeCheckout
                            name='acha'
                            billingAddress
                            description={`votre total est ${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <button className="cart-summary-btn">CHECKOUT NOW</button>
                        </StripeCheckout>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default Cart