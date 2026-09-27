import React from "react";
import { Link } from "react-router-dom";
import {
  FaBoxOpen,
  FaTags,
  FaHeadset,
  FaStar,
  FaTruck,
  FaCreditCard,
  FaUndo,
  FaShieldAlt,
} from "react-icons/fa";

import "./About.css";

function About() {
  return (
    <div className="about_page">

      {/* Hero */}
      <section className="about_hero">
        <div className="container">

          <div className="about_hero_content">
            <span>ABOUT US</span>

            <h1>
              Your Trusted
              <br />
              <strong>Online Store</strong>
            </h1>

            <p>
              We're more than just an online store — we're your shopping
              partner. Our goal is to bring you the best products, great
              prices, and a smooth shopping experience, all in one place.
            </p>

            <Link to="/shop" className="about_btn">
              Shop Now <span>→</span>
            </Link>
          </div>

          <div className="about_hero_image">
            <img
              src="https://media.licdn.com/dms/image/v2/D5612AQHkNgE8wp_EaQ/article-cover_image-shrink_720_1280/B56ZnjqEqWJ8AI-/0/1760461089618?e=2147483647&t=kVbU5i_sMALAhP3AUxR2xC4unCQ7_KzubsD55gilHbg&v=beta"
              alt="Online shopping"
            />
          </div>

        </div>
      </section>


      {/* Statistics */}
      <section className="about_stats">
        <div className="container">

          <div className="stat_item">
            <div className="stat_icon">
              <FaBoxOpen />
            </div>
            <h3>1000+</h3>
            <p>Products</p>
          </div>

          <div className="stat_item">
            <div className="stat_icon">
              <FaTags />
            </div>
            <h3>50+</h3>
            <p>Brands</p>
          </div>

          <div className="stat_item">
            <div className="stat_icon">
              <FaHeadset />
            </div>
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>

          <div className="stat_item">
            <div className="stat_icon">
              <FaStar />
            </div>
            <h3>4.8/5</h3>
            <p>Customer Satisfaction</p>
          </div>

        </div>
      </section>


      {/* Our Story */}
      <section className="our_story">
        <div className="container">

          <div className="story_image">
            <img
              src="https://cdn.prod.website-files.com/671a36522d7f3f9f9ab82566/6773d1aa0b06b65535bb16f4_api-carrier-integration-meaning.jpg"
              alt="Online order delivery"
            />
          </div>

          <div className="story_content">

            <span>OUR STORY</span>

            <h2>
              How It All <strong>Started</strong>
            </h2>

            <p>
              Ecommerce was founded with a simple idea: to make online
              shopping easier, faster, and more enjoyable.
            </p>

            <p>
              We noticed that finding quality products at good prices could
              be a challenge, so we built a platform that brings together
              the best products and a smooth shopping experience.
            </p>

            <div className="story_features">

              <div>
                <FaStar />
                <span>Quality Products</span>
              </div>

              <div>
                <FaShieldAlt />
                <span>Secure Shopping</span>
              </div>

              <div>
                <FaHeadset />
                <span>Dedicated Support</span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* Why Us */}
      <section className="why_us">
        <div className="container">

          <div className="why_content">

            <span>WHY SHOP WITH US</span>

            <h2>
              More Than <strong>Just a Store</strong>
            </h2>

            <p>
              We're committed to providing you with the best shopping
              experience, from the moment you browse until your order arrives.
            </p>

            <Link to="/shop" className="about_btn">
              Learn More <span>→</span>
            </Link>

          </div>

          <div className="benefits">

            <div className="benefit">
              <div className="benefit_icon">
                <FaTruck />
              </div>

              <div>
                <h4>Fast Delivery</h4>
                <p>Get your orders quickly and reliably.</p>
              </div>
            </div>

            <div className="benefit">
              <div className="benefit_icon">
                <FaCreditCard />
              </div>

              <div>
                <h4>Secure Payment</h4>
                <p>Shop with confidence using secure payment methods.</p>
              </div>
            </div>

            <div className="benefit">
              <div className="benefit_icon">
                <FaUndo />
              </div>

              <div>
                <h4>Easy Returns</h4>
                <p>Hassle-free returns when you need them.</p>
              </div>
            </div>

            <div className="benefit">
              <div className="benefit_icon">
                <FaStar />
              </div>

              <div>
                <h4>Quality Products</h4>
                <p>Top brands and carefully selected products.</p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="about_cta">

        <div className="container">

          <div className="cta_content">

            <span>READY TO SHOP?</span>

            <h2>
              Discover Amazing Products
            </h2>

            <p>
              Find your favorite products and enjoy a smooth shopping
              experience today.
            </p>

            <Link to="/shop" className="cta_btn">
              Start Shopping <span>→</span>
            </Link>

          </div>

        

        </div>

      </section>

    </div>
  );
}

export default About;