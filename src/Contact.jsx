import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Book your appointment or ask a question.</p>
      </section>

      <section className="contact-form-section">
        <form className="contact-form">
          <label>
            Name:
            <input type="text" placeholder="Your Name" required />
          </label>

          <label>
            Email:
            <input type="email" placeholder="Your Email" required />
          </label>

          <label>
            Message:
            <textarea placeholder="Your Message" required></textarea>
          </label>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
