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
import Order from "./components/Order/Order";
import Basket from "./pages/Basket/Basket";
import { useState } from "react";
import data from "./Data/Data";

function App() {
  const [listId, setListId] = useState([]);

  const menu = data;
  const basketData = menu.filter(({ id }) => {
    return listId.includes(id);
  });
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home setListId={setListId} />} />
        <Route
          path="/menu"
          element={<Menu setListId={setListId} listId={listId} />}
        />
        <Route path="/about" element={<Hero />} />
        <Route path="/findUs" element={<Order />} />
        <Route path="/basket" element={<Basket basketData={basketData} />} />
        <Route path="*" element={<div></div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
