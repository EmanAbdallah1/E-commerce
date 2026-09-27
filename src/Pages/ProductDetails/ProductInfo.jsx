import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import {
  FaRegHeart,
  FaRegStarHalfStroke,
  FaShare,
  FaStar,
} from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from '../../Components/Context/CartContext';

function ProductInfo({productData}) {
    const { cartItems, addToCart } = useContext(CartContext);
      const isInCart=cartItems.some((cartItem)=>cartItem.id===productData.id);

      const handleAddToCart = () => {
      addToCart(productData)
  
      toast.success(
        <div className='toast-wrapper'>
          <img src={productData.images[0]} alt="" className='toast-img'/>
  
          <div className="toast-content">
            <strong>{productData.title}</strong>
            added to Cart
            <div>
              <button className='btn' onClick={() => navigate('/cart')}> View Cart</button>
            </div>
          </div>
        </div>
        ,{duration : 3500}
      )
  
    }
  return (
      <div className="details_item">
      <h1 className="name">{productData.title}</h1>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
      </div>

      <p className="price">$ {productData.price}</p>

      <h5>
        Availability: <span>{productData.availabilityStatus}</span>
      </h5>
      <h5>
        Brand: <span>{productData.brand}</span>
      </h5>
      <p className="desc">{productData.description}</p>
      <h5 className="stock">
        <span>Hurry Up! Only {productData.stock} products left in stock.</span>{" "}
      </h5>

      <button onClick={handleAddToCart} className={`btn ${isInCart ? 'in-cart' : ''}`}>
        {isInCart ? "item in cart" : "Add to cart"}        <TiShoppingCart />
      </button>
      <div className="icons">
        <span >
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  )
}

export default ProductInfo