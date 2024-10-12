import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./assets/About";
import Demo from "./assets/Demo";
import Contact from "./Contact";
import Home from "./assets/Home";
import Header from "./assets/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
