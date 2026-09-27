import React, { useContext } from "react";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../../Components/Context/CartContext";

import "./Header.css";
import SearchBox from "./SearchBox";
function TopHeader() {
  const { cartItems,favouriteItems } = useContext(CartContext);
  console.log("cartItemsnum",cartItems.length)
  return (
    <div className="top_header">
      <div className="container">
        <Link className="logo" to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      
        <SearchBox/>

        <div className="header_icons">
          <div className="icon">
            <Link to="/favorites">
              <FaRegHeart />
              <span className="count">{favouriteItems.length}</span>
            </Link>
          </div>

          <div className="icon">
            <Link to="/cart">
              <TiShoppingCart />
              <span className="count">{cartItems.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
