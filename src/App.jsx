import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Navigation from "./components/Navigation";
import UserContext from "./UserContext";
import "./App.css";

export default function App() {
  const [name, setName] = useState("Alethea");
  return (
    <div className="appRoot">
      <UserContext.Provider value={{ name, setName }}>
        <h1>Learning HTML + CSS</h1>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}
