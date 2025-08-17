"use client"
import React from "react"
import "./Modal.css"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Contact Us</h2>

        <div className="contact-details">
          <p><strong>Address:</strong> 123 Tech Avenue, Accra, Ghana</p>
          <p><strong>Phone:</strong> +233 50 123 4567</p>
          <p><strong>Email:</strong> support@dabtechnologies.com</p>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={4} placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactModal
