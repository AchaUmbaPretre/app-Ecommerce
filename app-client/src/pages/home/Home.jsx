import React from 'react'
import Categories from '../../components/categories/Categories'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Newsletter from '../../components/newsletter/Newsletter'
import Products from '../../components/products/Products'
import Slider from '../../components/slider/Slider'
import Topbar from '../../components/topbar/Topbar'
import './home.css'

const Home = () => {
  return (
    <>
       <Topbar/> 
       <Navbar/>
       <Slider/>
       <Categories/>
       <Products/>
       <Newsletter/>
       <Footer/>
    </>
  )
}

export default Home