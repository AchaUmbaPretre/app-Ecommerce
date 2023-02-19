import React from 'react'
import './productItem.css'
import image2 from '../../assets/image2.jpg'

function ProductItem() {
  return (
    <>
        <div className="productItem">
            <div className="cercle"></div>
            <img  className="productItem-img" src={image2} alt="" />
            <div className="info-products">
                <div className="icon-products"><i className="fas fa-cart-shopping icon"></i></div>
                <div className="icon-products"><i className="fas fa-search icon"></i></div>
                <div className="icon-products"><i className="fas fa-heart icon1"></i></div>
            </div>
        </div>
    </>
  )
}

export default ProductItem