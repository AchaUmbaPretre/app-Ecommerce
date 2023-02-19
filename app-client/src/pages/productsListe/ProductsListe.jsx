import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Products from '../../components/products/Products'
import Topbar from '../../components/topbar/Topbar'
import  './productsListe.css'
import { useLocation } from 'react-router-dom'

const ProductsListe = () => {
    const location = useLocation()
    const cat = location.pathname.split('/')[2]
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState('newest')

    const handfilters = (e) =>{
        setFilters((prev)=>({
            ...prev, [e.target.name]: e.target.value
        }))
    }
    console.log(sort)
  return (
    <>
        <div className="productsListe">
            <Navbar/>
            <Topbar/>
            <h1 className="productsListe-titre">Dresses</h1>
            <div className="filter-container">
                <div className="filter-left">
                    <span className="filter-txt">Filter Products:</span>
                    <select name="color" onChange={handfilters} id="">
                        <option value="" disabled selected>Color</option>
                        <option value="White">White</option>
                        <option value="Black">Black</option>
                        <option value="">Red</option>
                        <option value="Red">Bleu</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Green">Green</option>
                    </select>
                    <select name="size" onChange={handfilters} id="">
                        <option value="" disabled selected>Size</option>
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
                        <option value="newest" selected>Newest</option>
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