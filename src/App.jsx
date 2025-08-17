import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import Services from "./Services";
import "./App.css"; 

function App() {
  return (
    <Router>
      <Header /> 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer /> 
    </Router>
  );
}

export default App;
