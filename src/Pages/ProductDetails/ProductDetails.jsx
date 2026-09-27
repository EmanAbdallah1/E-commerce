import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import SlideProduct from "../../components/slideProducts/SlideProduct";

import "./productdetails.css";
function ProductDetails() {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [productCategoryRelated, setProductCtegoryRelated] = useState(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  }, [id]);
  useEffect(() => {
    if (!productData) return;
    fetch(`https://dummyjson.com/products/category/${productData.category}`)
      .then((res) => res.json())
      .then((data) => setProductCtegoryRelated(data.products));
  }, [productData]);

  return (
    <div>
      {productData && (
        <div className="item_details">
          <div className="container">
            <ProductImages productData={productData} />
            <ProductInfo productData={productData} />
          </div>
        </div>
      )}
      {productData && productCategoryRelated && (
        <SlideProduct
          key={productData.category}
          products={productCategoryRelated}
          title={productData.category.replace("-", " ")}
        />
      )}
    </div>
  );
}

export default ProductDetails;
