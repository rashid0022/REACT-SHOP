import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        
        <div className="contact-form-box">
          <h1>Contact Us</h1>
          <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter your name" 
              required 
            />

            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
              required 
            />

            <label htmlFor="phone">Phone:</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              placeholder="+255 ..." 
              required 
            />

            <label htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              name="message" 
              rows="6" 
              placeholder="Write your message..." 
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        
        <div className="contact-info">
          <h2>Get in Touch 📞</h2>
          <p><strong>📍 Address:</strong> Dar es Salaam, Tanzania</p>
          <p><strong>📞 Phone:</strong> +255 700 123 456</p>
          <p><strong>✉️ Email:</strong> support@example.com</p>

          <h3>Follow Us 🌍</h3>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">WhatsApp</a>
            <a href="#">Instagram</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
