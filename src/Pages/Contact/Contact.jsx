import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaHeadset,
} from "react-icons/fa";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact_page">
      {" "}
      {/* ================= HERO ================= */}{" "}
      <section className="contact_hero">
        {" "}
        <div className="container">
          {" "}
          <div className="contact_hero_content">
            {" "}
            <span>GET IN TOUCH</span>{" "}
            <h1>
              {" "}
              We'd Love To <br /> <strong>Hear From You</strong>{" "}
            </h1>{" "}
            <p>
              {" "}
              Have a question about a product, your order, or anything else? Our
              team is here to help and make your shopping experience
              better.{" "}
            </p>{" "}
          </div>{" "}
          <div className="contact_hero_image">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
              alt="Customer support team"
            />{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ================= CONTACT INFO ================= */}{" "}
      <section className="contact_info">
        {" "}
        <div className="container">
          {" "}
          <div className="contact_info_card">
            {" "}
            <div className="contact_icon">
              {" "}
              <FaEnvelope />{" "}
            </div>{" "}
            <div>
              {" "}
              <h3>Email Us</h3> <p>support@ecommerce.com</p>{" "}
              <span>We'll reply as soon as possible.</span>{" "}
            </div>{" "}
          </div>{" "}
          <div className="contact_info_card">
            {" "}
            <div className="contact_icon">
              {" "}
              <FaPhoneAlt />{" "}
            </div>{" "}
            <div>
              {" "}
              <h3>Call Us</h3> <p>+20 100 123 4567</p>{" "}
              <span>Available during working hours.</span>{" "}
            </div>{" "}
          </div>{" "}
          <div className="contact_info_card">
            {" "}
            <div className="contact_icon">
              {" "}
              <FaMapMarkerAlt />{" "}
            </div>{" "}
            <div>
              {" "}
              <h3>Visit Us</h3> <p>Cairo, Egypt</p>{" "}
              <span>Our support team is always ready.</span>{" "}
            </div>{" "}
          </div>{" "}
          <div className="contact_info_card">
            {" "}
            <div className="contact_icon">
              {" "}
              <FaClock />{" "}
            </div>{" "}
            <div>
              {" "}
              <h3>Working Hours</h3> <p>09:00 AM - 08:00 PM</p>{" "}
              <span>Saturday - Thursday</span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ================= CONTACT FORM ================= */}{" "}
      <section className="contact_form_section">
        {" "}
        <div className="container">
          {" "}
          <div className="contact_form_image">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85"
              alt="Customer service"
            />{" "}
            <div className="support_badge">
              {" "}
              <div className="support_badge_icon">
                {" "}
                <FaHeadset />{" "}
              </div>{" "}
              <div>
                {" "}
                <strong>Need Help?</strong> <span>We're here for you</span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="contact_form_wrapper">
            {" "}
            <span>CONTACT US</span>{" "}
            <h2>
              {" "}
              Send Us a <strong>Message</strong>{" "}
            </h2>{" "}
            <p>
              {" "}
              Fill out the form and our team will get back to you shortly.{" "}
            </p>{" "}
            <form>
              {" "}
              <div className="form_row">
                {" "}
                <div className="form_group">
                  {" "}
                  <label>Your Name</label>{" "}
                  <input type="text" placeholder="Enter your name" />{" "}
                </div>{" "}
                <div className="form_group">
                  {" "}
                  <label>Email Address</label>{" "}
                  <input type="email" placeholder="Enter your email" />{" "}
                </div>{" "}
              </div>{" "}
              <div className="form_group">
                {" "}
                <label>Subject</label>{" "}
                <input
                  type="text"
                  placeholder="What is your message about?"
                />{" "}
              </div>{" "}
              <div className="form_group">
                {" "}
                <label>Your Message</label>{" "}
                <textarea
                  rows="6"
                  placeholder="Write your message here..."
                ></textarea>{" "}
              </div>{" "}
              <button type="submit" className="send_message_btn">
                {" "}
                Send Message <FaPaperPlane />{" "}
              </button>{" "}
            </form>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ================= FAQ ================= */}{" "}
      <section className="contact_faq">
        {" "}
        <div className="container">
          {" "}
          <div className="faq_title">
            {" "}
            <span>QUICK HELP</span>{" "}
            <h2>
              {" "}
              Frequently Asked <strong>Questions</strong>{" "}
            </h2>{" "}
            <p> Here are some common questions our customers ask. </p>{" "}
          </div>{" "}
          <div className="faq_grid">
            {" "}
            <div className="faq_item">
              {" "}
              <h3>How can I track my order?</h3>{" "}
              <p>
                {" "}
                You can track your order using the tracking information provided
                after your purchase.{" "}
              </p>{" "}
            </div>{" "}
            <div className="faq_item">
              {" "}
              <h3>How can I return a product?</h3>{" "}
              <p>
                {" "}
                Contact our support team and we'll guide you through the return
                process.{" "}
              </p>{" "}
            </div>{" "}
            <div className="faq_item">
              {" "}
              <h3>How long does delivery take?</h3>{" "}
              <p>
                {" "}
                Delivery time depends on your location and the selected shipping
                method.{" "}
              </p>{" "}
            </div>{" "}
            <div className="faq_item">
              {" "}
              <h3>Can I change my order?</h3>{" "}
              <p>
                {" "}
                If your order hasn't been shipped yet, contact us and we'll do
                our best to help.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ================= CTA ================= */}{" "}
      <section className="contact_cta">
        {" "}
        <div className="container">
          {" "}
          <div className="contact_cta_icon">
            {" "}
            <FaHeadset />{" "}
          </div>{" "}
          <div>
            {" "}
            <span>WE'RE HERE TO HELP</span>{" "}
            <h2> Your Questions Matter To Us </h2>{" "}
            <p>
              {" "}
              Don't hesitate to reach out. Our support team is always happy to
              help.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
}
export default Contact;
