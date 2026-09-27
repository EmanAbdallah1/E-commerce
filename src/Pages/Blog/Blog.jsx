import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaLaptop,
  FaMobileAlt,
  FaHeadphones,
  FaLightbulb,
} from "react-icons/fa";
import "./Blog.css";
function Blog() {
  const posts = [
    {
      id: 1,
      category: "TECH",
      title: "How to Choose the Right Laptop for Your Needs",
      description:
        "A simple guide to help you choose the perfect laptop based on performance, work, study and everyday use.",
      date: "Sep 24, 2026",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 2,
      category: "MOBILE",
      title: "5 Accessories Every Smartphone User Needs",
      description:
        "Discover useful smartphone accessories that can make your daily experience easier and more enjoyable.",
      date: "Sep 20, 2026",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 3,
      category: "GADGETS",
      title: "Smart Gadgets That Can Upgrade Your Lifestyle",
      description:
        "From smart watches to wireless devices, explore gadgets that combine style, convenience and technology.",
      date: "Sep 16, 2026",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 4,
      category: "AUDIO",
      title: "Wireless Headphones: What Should You Look For?",
      description:
        "Before buying your next pair of headphones, learn about sound quality, comfort, battery life and more.",
      date: "Sep 12, 2026",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 5,
      category: "SHOPPING",
      title: "Simple Tips for a Better Online Shopping Experience",
      description:
        "Learn how to compare products, check specifications and make smarter online shopping decisions.",
      date: "Sep 08, 2026",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 6,
      category: "TECH",
      title: "Why Good Accessories Make a Big Difference",
      description:
        "The right accessories can improve productivity, comfort and the way you use your everyday devices.",
      date: "Sep 04, 2026",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    },
  ];
  const categories = [
    { title: "Laptops", icon: <FaLaptop /> },
    { title: "Mobile", icon: <FaMobileAlt /> },
    { title: "Accessories", icon: <FaHeadphones /> },
    { title: "Tips & Guides", icon: <FaLightbulb /> },
  ];
  return (
    <div className="blog_page">
      {" "}
      {/* ================= HERO ================= */}{" "}
      <section className="blog_hero">
        {" "}
        <div className="container">
          {" "}
          <div className="blog_hero_content">
            {" "}
            <span>OUR BLOG</span>{" "}
            <h1>
              {" "}
              Ideas, Tips & <br /> <strong>Tech Inspiration</strong>{" "}
            </h1>{" "}
            <p>
              {" "}
              Discover helpful guides, technology tips, product insights and
              everything you need to make smarter shopping decisions.{" "}
            </p>{" "}
            <a href="#latest-posts" className="blog_hero_btn">
              {" "}
              Explore Articles <FaArrowRight />{" "}
            </a>{" "}
          </div>{" "}
          <div className="blog_hero_image">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1000&q=85"
              alt="Blog and technology"
            />{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ================= CATEGORIES ================= */}{" "}
      <section className="blog_categories">
        {" "}
        <div className="container">
          {" "}
          <div className="blog_section_title">
            {" "}
            <span>EXPLORE</span>{" "}
            <h2>
              {" "}
              Browse By <strong>Topic</strong>{" "}
            </h2>{" "}
            <p> Find articles based on what you're interested in. </p>{" "}
          </div>{" "}
          <div className="blog_categories_grid">
            {" "}
            {categories.map((category) => (
              <div className="blog_category" key={category.title}>
                {" "}
                <div className="blog_category_icon"> {category.icon} </div>{" "}
                <h3>{category.title}</h3>{" "}
                <FaArrowRight className="category_arrow" />{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ================= FEATURED ================= */}{" "}
      <section className="featured_post">
        {" "}
        <div className="container">
          {" "}
          <div className="featured_image">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1100&q=85"
              alt="Laptop guide"
            />{" "}
          </div>{" "}
          <div className="featured_content">
            {" "}
            <span>FEATURED ARTICLE</span>{" "}
            <h2>
              {" "}
              How to Choose the <br /> <strong>Perfect Laptop</strong>{" "}
            </h2>{" "}
            <p>
              {" "}
              Choosing a laptop doesn't have to be complicated. Learn what
              specifications really matter and how to choose a device that fits
              your work, study and everyday needs.{" "}
            </p>{" "}
            <div className="featured_meta">
              {" "}
              <span>TECH</span> <span>•</span> <span>Sep 24, 2026</span>{" "}
            </div>{" "}
            <Link to="/blog/1" className="read_more">
              {" "}
              Read Article <FaArrowRight />{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ================= LATEST POSTS ================= */}{" "}
      <section className="latest_posts" id="latest-posts">
        {" "}
        <div className="container">
          {" "}
          <div className="blog_section_title">
            {" "}
            <span>FROM THE BLOG</span>{" "}
            <h2>
              {" "}
              Latest <strong>Articles</strong>{" "}
            </h2>{" "}
            <p>
              {" "}
              Stay updated with our latest tips, guides and tech insights.{" "}
            </p>{" "}
          </div>{" "}
          <div className="blog_posts_grid">
            {" "}
            {posts.map((post) => (
              <article className="blog_card" key={post.id}>
                {" "}
                <div className="blog_card_image">
                  {" "}
                  <img src={post.image} alt={post.title} />{" "}
                  <span>{post.category}</span>{" "}
                </div>{" "}
                <div className="blog_card_content">
                  {" "}
                  <div className="blog_date"> {post.date} </div>{" "}
                  <h3>{post.title}</h3> <p>{post.description}</p>{" "}
                  <Link to={`/blog/${post.id}`}>
                    {" "}
                    Read More <FaArrowRight />{" "}
                  </Link>{" "}
                </div>{" "}
              </article>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ================= NEWSLETTER ================= */}{" "}
      <section className="blog_newsletter">
        {" "}
        <div className="container">
          {" "}
          <div className="newsletter_icon">
            {" "}
            <FaLightbulb />{" "}
          </div>{" "}
          <div className="newsletter_content">
            {" "}
            <span>STAY UPDATED</span> <h2> Get New Articles & Tips </h2>{" "}
            <p>
              {" "}
              Stay up to date with the latest technology news, shopping guides
              and useful tips.{" "}
            </p>{" "}
          </div>{" "}
          <div className="newsletter_form">
            {" "}
            <input type="email" placeholder="Enter your email address" />{" "}
            <button>
              {" "}
              Subscribe <FaArrowRight />{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
}
export default Blog;
