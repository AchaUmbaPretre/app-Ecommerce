import React from 'react'
import './categories.css'
import {items} from '../../data.js'
import CategorieItem from '../categorieItem/CategorieItem'

const Categories = () => {

  return (
    <>
        <div className="categories">
            {items.map((item)=>{
            return <CategorieItem item={item} key={item.id} /> 
                })}
        </div>
    </>
  )
}

export default Categories