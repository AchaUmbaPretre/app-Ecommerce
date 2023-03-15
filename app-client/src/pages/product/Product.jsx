import React, { useEffect } from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Newsletter from '../../components/newsletter/Newsletter'
import Topbar from '../../components/topbar/Topbar'
import './product.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartRedux'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../../methodeRequest'

const Product = () => {

    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    useEffect(() =>{
        const getProduct = async () =>{

            try{
                const res = await publicRequest.get("product/find/"+ id);
                setProduct(res.data)
            }
            catch(error){
                console.log(error)
            }
        }
        getProduct();
    }, [id])

    const handleQuantity = (type) =>{

        type === "inc" ? setQuantity(quantity + 1) 
                      : quantity > 1 && setQuantity(quantity - 1)
    }

    const handleClick = () =>{
        dispatch(
            addProduct({ ...product, quantity, color, size })
        )
    }
  
  return (
    <>
        <div className="product">
            <Navbar/>
            <Topbar/>
            <div className="product-container">
                <div className="product-left">
                    <img src={product.img} alt="" className="product-img" />
                </div>
                <div className="product-right">
                    <h1 className="product-titre">{product.title}</h1>
                    <p className="product-desc">{product.desc}</p>
                    <span className="product-price">$ {product.price}</span>
                    <div className="filter-product">
                        <div className="filter">
                            <span className="filter-titre">Color</span>
                           {
                                product.color?.map(c =>(
                                    <div className={`filter-color ${c}`} key={c} color={c} />
                                )) 
                            }
                        </div>
                        <div className="filter">
                            <span className="filter-titre">Size</span>
                            <select name="" id="">
                             { product.size?.map((s) =>(
                                    <option value="" key={s} >{s}</option>
                                    ))}
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