import React from 'react'

function ProductImages({productData}) {
  return (
       <div className="imgs_item">
                <div className="big_img">
                  <img id="big_img" src={productData.images[0]} alt={productData.title} />
                </div>
    
                <div className="sm_img">
                  {productData.images.map((img, index) => (
                    <div className="img_div_sm"  key={index}>
                      <img
                      src={img}
                      alt={productData.title}
                      onClick={() => (document.getElementById("big_img").src = img)}
                    />
                    </div>
                  ))}
                </div> 
              </div>
  )  
}

export default ProductImages