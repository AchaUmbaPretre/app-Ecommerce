import React from 'react'
import './categorieItem.css'
import image3 from '../../assets/image3.jpg'
import { Link, useLocation } from 'react-router-dom'

const CategorieItem = ({item}) => {

  return (
    <>
        <div className="categorieItem" key={item.id}>
          <Link to={`/productliste/:${item.cart}`}>
            <img className="categorieItem-img" src={image3} alt="" />
            <div className="info">
                <span className="desc-info">{item.desc}</span>
                <button className="btn-info">SHOW NOW</button>
            </div>
          </Link>
        </div>
    </>
  )
}

export default CategorieItem