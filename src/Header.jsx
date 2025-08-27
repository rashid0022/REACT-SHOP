import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="navbar">
      <div className="logo">Aid & Loan</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
