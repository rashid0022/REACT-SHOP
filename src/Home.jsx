import "./Home.css";

function Home() {
  return (
    <section className="home-section">
      <div className="home-container">
        
        {/* Hero Text */}
        <div className="home-text">
          <h1>Welcome to Aid & Loan System</h1>
          <p>
            Our platform provides easy access to <strong>Loans</strong> and
            promotes <strong>AIDS Awareness</strong> to build a healthier and
            financially stable community.
          </p>
          <div className="home-buttons">
            <a href="/about" className="btn-primary">Learn More</a>
            <a href="/contact" className="btn-secondary">Contact Us</a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="home-image">
          <img src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png" alt="Aid and Loan" />
        </div>
      </div>

      {/* Info Highlights */}
      <div className="highlights">
        <div className="highlight-box">
          <h2>💰 Loan Support</h2>
          <p>Apply for financial support and manage your repayments easily and transparently.</p>
        </div>
        <div className="highlight-box">
          <h2>❤️ AIDS Awareness</h2>
          <p>Access reliable health information, testing resources, and counseling support.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
