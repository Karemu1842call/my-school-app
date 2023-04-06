import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
// import Class from "./components/Class";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Schooldata from "./utilis/Schooldata";
import Tms from "./components/Tms";
import Login from "./components/Login";
import React, { useEffect, useState } from "react";
import UpdateForm from "./utilis/UpdateForm";
import CreateForm from "./utilis/CreateForm";
function App() {
  const [currentuser, setCurrentuser] = useState("");

  useEffect(() => {
    fetch("/auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentuser(user));
      }
    });
  }, []);
  if (!currentuser) return <Login setCurrentuser={setCurrentuser} />;
  return (
    <>
    <div className="bg-primary">
      <Header setCurrentuser={setCurrentuser}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schooldata" element={<Schooldata />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/class" element={<Class />} /> */}
        <Route path="/tms" element={<Tms />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/updateform" element={<UpdateForm />} />
        <Route path="/createform" element={<CreateForm />} />
      </Routes>
      <Footer />
      </div>
    </>
  );
}

export default App;
