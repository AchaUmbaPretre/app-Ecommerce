import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Newsletter from '../../components/newsletter/Newsletter'
import Topbar from '../../components/topbar/Topbar'
import image3  from '../../assets/image3.jpg'
import './product.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartRedux'
import { useLocation } from 'react-router-dom'

const Product = () => {

    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    const handleQuantity = (type) =>{

        type === "inc" ? setQuantity(quantity + 1) 
                      : quantity > 1 && setQuantity(quantity - 1)
    }

    const handleClick = () =>{
        dispatch(
            addProduct({ product, quantity, price: product.price * quantity})
        )
    }
  
  return (
    <>
        <div className="product">
            <Navbar/>
            <Topbar/>
            <div className="product-container">
                <div className="product-left">
                    <img src={image3} alt="" className="product-img" />
                </div>
                <div className="product-right">
                    <h1 className="product-titre">Denim Jumpsuit</h1>
                    <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Hic, maxime fugiat blanditiis aliquam molestiae obcaecati quae eveniet perspiciatis?
                      Alias aut quisquam eveniet, maxime voluptatibus voluptate blanditiis ipsum unde ab cum.
                    </p>
                    <span className="product-price">$ 50</span>
                    <div className="filter-product">
                        <div className="filter">
                            <span className="filter-titre">Color</span>
                            <div className='filter-color' color='black' />
                            <div  className='filter-color bleu' color='darkbleu'/>
                            <div  className='filter-color gray' color='gray'/>
                        </div>
                        <div className="filter">
                            <span className="filter-titre">Size</span>
                            <select name="" id="">
                                <option value="">XS</option>
                                <option value="">S</option>
                                <option value="">M</option>
                                <option value="">L</option>
                                <option value="">XL</option>
                            </select>
                        </div>
                    </div>
                    <div className="filter-product">
                        <div className="filter">
                            <i className="fas fa-minus filter-icon " onClick={()=>handleQuantity('dec')}></i>
                            <span className="filter-nb">{quantity}</span>
                            <i className="fas fa-plus filter-icon" onClick={()=>handleQuantity('inc')}></i>
                        </div>
                        <div className="filter">
                            <button className="filter-btn" onClick={handleClick}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter/>
            <Footer/>

        </div>
    </>
  )
}

export default Product