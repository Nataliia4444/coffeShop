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
import Error from "./pages/Error/Error";

function App() {
  const [listId, setListId] = useState([]);
  const [basket, setBasket] = useState(false);

  const menu = data;
  const basketData = menu.filter(({ id }) => {
    return listId.includes(id);
  });
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home setListId={setListId} setBasket={setBasket} />}
        />
        <Route
          path="/menu"
          element={
            <Menu setListId={setListId} listId={listId} setBasket={setBasket} />
          }
        />
        <Route path="/about" element={<Hero />} />
        <Route path="/findUs" element={<Order />} />
        <Route
          path="/basket"
          element={<Basket basketData={basketData} basket={basket} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
