import React from "react";
import { Link } from "react-router-dom";
import {
  FaHeadphones,
  FaMobileAlt,
  FaClock,
  FaGamepad,
  FaShoppingBag,
  FaArrowRight,
} from "react-icons/fa";
import "./Accessories.css";
function Accessories() {
  const categories = [
    {
      title: "Headphones",
      icon: <FaHeadphones />,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Mobile Accessories",
      icon: <FaMobileAlt />,
      image:
        "https://images.unsplash.com/photo-1609592424848-1f4b7d1a9d9e?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Smart Watches",
      icon: <FaClock />,
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Gaming",
      icon: <FaGamepad />,
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=500&q=80",
    },
  ];
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$59.99",
      oldPrice: "$79.99",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$89.99",
      oldPrice: "$119.99",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "Wireless Controller",
      price: "$49.99",
      oldPrice: "$69.99",
      image:
        "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      name: "Premium Headset",
      price: "$74.99",
      oldPrice: "$99.99",
      image:
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80",
    },
  ];
  return (
    <div className="accessories_page">
      {" "}
      {/* ================= HERO ================= */}{" "}
      <section className="accessories_hero">
        {" "}
        <div className="container">
          {" "}
          <div className="accessories_hero_content">
            {" "}
            <span>TECH ACCESSORIES</span>{" "}
            <h1>
              {" "}
              Upgrade Your <br /> <strong>Everyday Life</strong>{" "}
            </h1>{" "}
            <p>
              {" "}
              Discover smart accessories, stylish gadgets and must-have tech
              products designed to make your everyday life easier.{" "}
            </p>{" "}
            <Link to="/shop" className="accessories_btn">
              {" "}
              Shop Accessories <FaArrowRight />{" "}
            </Link>{" "}
          </div>{" "}
          <div className="accessories_hero_image">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=1000&q=85"
              alt="Tech accessories"
            />{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ================= CATEGORIES ================= */}{" "}
      <section className="accessories_categories">
        {" "}
        <div className="container">
          {" "}
          <div className="accessories_section_title">
            {" "}
            <span>EXPLORE</span>{" "}
            <h2>
              {" "}
              Shop By <strong>Category</strong>{" "}
            </h2>{" "}
            <p>
              {" "}
              Find the perfect accessories for your devices and lifestyle.{" "}
            </p>{" "}
          </div>{" "}
          <div className="accessories_categories_grid">
            {" "}
            {categories.map((category) => (
              <div className="accessory_category" key={category.title}>
                {" "}
                <div className="category_image">
                  {" "}
                  <img src={category.image} alt={category.title} />{" "}
                </div>{" "}
                <div className="category_content">
                  {" "}
                  <div className="category_icon"> {category.icon} </div>{" "}
                  <h3>{category.title}</h3>{" "}
                  <Link to="/shop">
                    {" "}
                    Explore <FaArrowRight />{" "}
                  </Link>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ================= FEATURE BANNER ================= */}{" "}
      <section className="accessories_banner">
        {" "}
        <div className="container">
          {" "}
          <div className="banner_content">
            {" "}
            <span>SMART CHOICE</span>{" "}
            <h2>
              {" "}
              Small Accessories. <br /> <strong>Big Difference.</strong>{" "}
            </h2>{" "}
            <p>
              {" "}
              Complete your setup with accessories that combine style, comfort
              and functionality.{" "}
            </p>{" "}
            <Link to="/shop" className="banner_btn">
              {" "}
              Discover More <FaArrowRight />{" "}
            </Link>{" "}
          </div>{" "}
          <div className="banner_image">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1588423771070-4f9a0c8e6d2c?auto=format&fit=crop&w=900&q=80"
              alt="Smart accessories"
            />{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ================= PRODUCTS ================= */}{" "}
      <section className="accessories_products">
        {" "}
        <div className="container">
          {" "}
          <div className="accessories_section_title">
            {" "}
            <span>OUR PICKS</span>{" "}
            <h2>
              {" "}
              Popular <strong>Accessories</strong>{" "}
            </h2>{" "}
            <p> Some of our favorite accessories chosen for you. </p>{" "}
          </div>{" "}
          <div className="accessories_products_grid">
            {" "}
            {products.map((product) => (
              <div className="accessory_product" key={product.id}>
                {" "}
                <div className="product_image">
                  {" "}
                  <span className="product_badge"> SALE </span>{" "}
                  <img src={product.image} alt={product.name} />{" "}
                </div>{" "}
                <div className="product_info">
                  {" "}
                  <h3>{product.name}</h3>{" "}
                  <div className="product_price">
                    {" "}
                    <span>{product.price}</span>{" "}
                    <del>{product.oldPrice}</del>{" "}
                  </div>{" "}
                  <Link to={`/product/${product.id}`}>
                    {" "}
                    View Product <FaArrowRight />{" "}
                  </Link>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ================= CTA ================= */}{" "}
      <section className="accessories_cta">
        {" "}
        <div className="container">
          {" "}
          <div className="cta_icon">
            {" "}
            <FaShoppingBag />{" "}
          </div>{" "}
          <div className="cta_content">
            {" "}
            <span>READY TO UPGRADE?</span>{" "}
            <h2> Find Your Perfect Accessories </h2>{" "}
            <p>
              {" "}
              Explore our collection and give your everyday devices the upgrade
              they deserve.{" "}
            </p>{" "}
          </div>{" "}
          <Link to="/shop" className="cta_button">
            {" "}
            Start Shopping <FaArrowRight />{" "}
          </Link>{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
}
export default Accessories;
