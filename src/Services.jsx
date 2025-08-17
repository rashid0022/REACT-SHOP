import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Quality grooming for every style.</p>
      </section>

      <section className="services-list">
        <div className="service-card">
          <h2>Haircuts</h2>
          <p>Precision haircuts tailored to your style and personality.</p>
        </div>

        <div className="service-card">
          <h2>Shaving</h2>
          <p>Clean, smooth, and professional shaving experience.</p>
        </div>

        <div className="service-card">
          <h2>Beard Styling</h2>
          <p>Expert trimming and styling for your beard.</p>
        </div>

        <div className="service-card">
          <h2>Hair Coloring</h2>
          <p>Modern coloring techniques to refresh your look.</p>
        </div>

        <div className="service-card">
          <h2>Kids Haircuts</h2>
          <p>Fun and comfortable haircuts for kids.</p>
        </div>
      </section>
    </div>
  );
}

export default Services;
