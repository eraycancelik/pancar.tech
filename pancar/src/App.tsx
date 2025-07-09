import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Main Components are imported
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

//Pages are imported
import Home from "./Pages/Home";
import AboutMe from "./Pages/About";
import UserGuide from "./Pages/UserGuide";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<AboutMe />} />
            <Route path="/UserGuide" element={<UserGuide />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
