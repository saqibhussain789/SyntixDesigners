import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Services from "./pages/services";
import Tutorials from "./pages/tutorials";
import About from "./pages/about";
import Contact from "./pages/contact";
import TutorialDetail from "./details/tutorialdetails";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/tutorials/:id" element={<TutorialDetail />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
      <Footer />
    </>
  );
}

export default App;
