import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About Our Loan and AIDS Support System</h1>

        <p>
          This project is designed to provide a clear system that manages{" "}
          <strong>Loans</strong> and gives information about{" "}
          <strong>AIDS awareness</strong>.
        </p>

        <h2>📌 Loan Section</h2>
        <p>
          The Loan section helps users apply for financial support, view their
          repayment schedules, and manage records in a transparent way. It
          ensures fair access to funds and accountability in repayments.
        </p>

        <h2>📌 AIDS Awareness Section</h2>
        <p>
          The AIDS section focuses on spreading correct health information,
          fighting stigma, and offering guidance to people affected or at risk.
          It also connects users with resources for testing, counseling, and
          treatment.
        </p>

        <div className="mission-box">
          <h3>Our Mission 🎯</h3>
          <p>
            To build a digital platform that improves access to loans and
            creates awareness about AIDS for a healthier and financially stable
            community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
