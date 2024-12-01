import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./pages/home";
import Services from "./pages/services";
import Tutorials from "./pages/tutorials";
import About from "./pages/about";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
