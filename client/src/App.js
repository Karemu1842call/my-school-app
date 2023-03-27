import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";

import { Routes, Route } from "react-router-dom";
import Class from "./components/Class";
import Education from "./components/Education";
import Contact from "./components/Contact";
import School from "./components/School";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/school" element={<School />} />
        <Route path="/about" element={<About />} />
        <Route path="/class" element={<Class />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
