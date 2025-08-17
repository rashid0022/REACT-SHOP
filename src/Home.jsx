import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      
      <section className="hero">
        <h1>Welcome to Barber Shop</h1>
        <p>Your style, our passion.</p>
      </section>

    
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Haircut</h3>
            <p>Professional haircuts tailored to your style.</p>
          </div>
          <div className="card">
            <h3>Shaving</h3>
            <p>Clean and precise shaving experience.</p>
          </div>
          <div className="card">
            <h3>Beard Styling</h3>
            <p>Get your beard styled by experts.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
