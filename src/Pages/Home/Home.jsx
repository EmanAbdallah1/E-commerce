import React, { useEffect, useState } from "react";
import HeroSlider from "../../Components/HeroSlider";
import "./Home.css";
import SlideProduct from "../../Components/SlideProducts/SlideProduct";

function Home() {
  const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
  "sports-accessories",
];
  const [products, setProducts] = useState({});

useEffect(() => {
    categories.forEach((category) => {
      fetch(`https://dummyjson.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data) => {
          setProducts((prev) => ({
            ...prev,
            [category]: data.products,
          }));
        });
    });
  }, []);
  return (
    <>
      <HeroSlider />
      
      {categories.map((category) => (
        <SlideProduct
          key={category}
          title={category.replace("-"," ")}
          products={products[category] || []}
        />
      ))}

    </>
  );
}

export default Home;
