import React, { useEffect, useState } from 'react'
import './products.css'
import ProductItem from '../productItem/ProductItem'
import axios from 'axios'

const Products = ({cat, filters, sort}) => {
  const  [products, setProducts] = useState([])
  const  [filterproducts, setFilterProducts] = useState([])

  useEffect(()=>{
    const getProducts = async () =>{
      try{
        const res = await axios.get( cat ? `http://localhost:8800/api/product?cat=${cat}
        ` : 'http://localhost:8800/api/product')
          setProducts(res.data);
        
      }catch(error){
          
      }
    }
    getProducts()
  },[cat])

  useEffect(()=>{
    cat && setFilterProducts(products.filter((item) => Object.entries(filters).every(([key,value]) => item[key].includes(value) )))
  }, [products,cat,filters])

  useEffect(()=>{
    if(sort === 'newest'){
        setFilterProducts((prev) => [...prev].sort((a,b) => a.createdAt - b.createAt))
    }
    else if(sort === 'asc'){
      setFilterProducts((prev) => [...prev].sort((a,b) => a.price - b.price))
    }
    else{
      setFilterProducts((prev) => [...prev].sort((a,b) => b.price - a.price))
    }
  },[sort])

  console.log(sort)


  return (
    <>
        <div className='products'>
            { cat ? filterproducts.map((item)=>{
              return <ProductItem product={item} key={item.id} />
            }) : filterproducts.slice(0,8).map((item)=> <ProductItem item={item} key={item.id} /> )}
        </div>
    </>
  )
}

export default Products