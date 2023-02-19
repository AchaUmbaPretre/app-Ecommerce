import React, { useEffect, useState } from 'react'
import './products.css'
import {itemProducts} from '../../data'
import ProductItem from '../productItem/ProductItem'
import axios from 'axios'

const Products = ({cat, filters, sort}) => {
  const  [products, setProducts] = useState([])
  const  [filterproducts, setFilterProducts] = useState([])

  useEffect(()=>{
    const getProducts = async () =>{
      try{
        const res = await axios.get('')

        
      }catch(error){

      }
    }
    getProducts()
  },[cat])


  return (
    <>
        <div className='products'>
            { itemProducts.map((Products)=>{
               return <ProductItem products={Products}/>
            }) }
        </div>
    </>
  )
}

export default Products