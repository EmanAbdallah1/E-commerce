import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom';
import Product from '../../Components/SlideProducts/Product';
import "./categorypage.css";

function CategoryPage() {
    const {category}=useParams();
    const[catData,setCatData]=useState([]);
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${category}`)
.then((res)=>res.json())
.then((data)=>setCatData(data.products));
    },[category])
    console.log("catData",catData)
  return (
        <div className="category_products">
      
        <div className="container">
          <div className="top_slide">
            <h2>{category} : {catData.limit}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, voluptates?
            </p>
          </div>

          <div className="products">
            {catData.map((item, index) => (
              <Product item={item} key={index} />
            ))}
          </div>
        </div>
    
    </div>
)}

export default CategoryPage