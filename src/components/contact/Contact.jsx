import React from "react";
import "./Contact.css"; // Import the CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container py-5">
      <div className="container">
        <div className="row">
          {/* Contact Information Section */}
          <div className="col-md-6 mb-4">
            <div className="contact-info">
              <h1>Contact Us</h1>
              <p>
                If you have any questions or inquiries, feel free to reach out
                to us through the form below or use the contact details
                provided.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <i className="fa-solid fa-location-dot fa-2x"></i>
                  <p>Kalindipuram, Prayagraj, India</p>
                </div>
                <div className="contact-item">
                  <i className="fa-solid fa-phone fa-2x"></i>
                  <p>+91 6394261448</p>
                </div>
                <div className="contact-item">
                  <i className="fa-solid fa-envelope fa-2x"></i>
                  <p>dwivediayush028@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="col-md-6 mb-4">
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="form-control"
                    placeholder="Your Message"
                    rows="5"
                    required></textarea>
                </div>
                <button type="submit" className="main_btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
