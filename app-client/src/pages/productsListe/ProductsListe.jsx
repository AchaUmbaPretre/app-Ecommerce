import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Products from '../../components/products/Products'
import Topbar from '../../components/topbar/Topbar'
import  './productsListe.css'
import { useLocation } from 'react-router-dom'

const ProductsListe = () => {
    const location = useLocation();
    const cat = location.pathname.split('/')[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState('newest');

    const handfilters = (e) =>{
        setFilters({
            ...filters, [e.target.name]: e.target.value
        })
    }
    console.log(location)
  return (
    <>
        <div className="productsListe">
            <Navbar/>
            <Topbar/>
            <h1 className="productsListe-titre">{cat}</h1>
            <div className="filter-container">
                <div className="filter-left">
                    <span className="filter-txt">Filter Products:</span>
                    <select name="color" onChange={handfilters} id="">
                        <option value="" disabled>color</option>
                        <option value="White">white</option>
                        <option value="Black">black</option>
                        <option value="">red</option>
                        <option value="Red">bleu</option>
                        <option value="Yellow">yellow</option>
                        <option value="Green">green</option>
                    </select>
                    <select name="size" onChange={handfilters} id="">
                        <option value="" disabled >Size</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
                <div className="filter-right">
                    <span className="filter-txt">Sort Products:</span>
                    <select name="" id="" onChange={(e)=>setSort(e.target.value)}>
                        <option value="newest" >Newest</option>
                        <option value="asc">Price (Asc)</option>
                        <option value="desc">Price (Desc)</option>
                    </select>
                </div>
            </div>
            <Products cat={cat} filters={filters} sort={sort} />
            <Footer/>
        </div>
    </>
  )
}

export default ProductsListe