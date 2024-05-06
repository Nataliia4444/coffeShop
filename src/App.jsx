// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//* REACT ROUTER DOM
import { Route, Routes } from "react-router-dom";

//* STYLES
import "./App.css";

//* COMPONENTS
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<Hero />} />
        <Route path="/findUs" element={<div></div>} />
        <Route path="/catering" element={<div></div>} />
        <Route path="/basket" element={<div></div>} />
        <Route path="*" element={<div></div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
