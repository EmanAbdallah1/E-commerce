import React, { useContext } from "react";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown, FaRegHeart, FaShare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { CartContext } from "../../Components/Context/CartContext";
import toast from 'react-hot-toast';
function Product({ item }) {
    const navigate = useNavigate()

  const { cartItems, addToCart ,addToFav,favouriteItems,handleRemoveFav} = useContext(CartContext);
  const isInCart=cartItems.some((cartItem)=>cartItem.id===item.id);
  const isInFav=favouriteItems.some((favItem)=>favItem.id===item.id);
  
  const handleAddToFav = () => {
    if(isInFav) {
      handleRemoveFav(item.id)
      toast.error(`${item.title} Removed from favorites`)
    }else{
    addToFav(item)
    toast.success(`${item.title} added To favorites`)
    }
   
   }
    const handleAddToCart = () => {
    addToCart(item)

    toast.success(
      <div className='toast-wrapper'>
        <img src={item.images[0]} alt="" className='toast-img'/>

        <div className="toast-content">
          <strong>{item.title}</strong>
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
    <div className={`product ${isInCart ? 'in-cart' : ''}`}>
      <Link to={`/product/${item.id}`}>
        <span className="status_cart">
          <FaCheck /> in cart
        </span>

        <div className="img_product">
          <img src={item.images[0]} alt="" />
        </div>

        <p className="name_product">{item.title}</p>

        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStarHalfStroke />
        </div>

        <p className="price">
          <span>$ {item.price}</span>
        </p>
      </Link>

      <div className="icons">
        <span
          className="btn_addtocart"
          onClick={handleAddToCart }
        >
          <FaCartArrowDown />
        </span>
            <span className={`${isInFav ? "in-fav" : ""}`} onClick={handleAddToFav}><FaRegHeart /></span>

       
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default Product;
