import React from 'react'
import './productItem.css'
import image2 from '../../assets/image2.jpg'
import { Link } from 'react-router-dom'

function ProductItem({item}) {

  return (
    <>
        <div className="productItem">
            <div className="cercle"></div>
            <img  className="productItem-img" src={image2} alt=''/>
            <div className="info-products">
                <div className="icon-products"><i className="fas fa-cart-shopping icon"></i></div>
                <Link to={`/product/${item._id}`}>
                  <div className="icon-products"><i className="fas fa-search icon"></i></div>
                </Link>
                <div className="icon-products"><i className="fas fa-heart icon1"></i></div>
            </div>
        </div>
    </>
  )
}

export default ProductItem