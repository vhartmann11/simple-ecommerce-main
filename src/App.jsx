import React from "react";
import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import BannerReverse from "./components/BannerReverse";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import ProudOf from "./components/ProudOf";
import Trending from "./components/Trending";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./components/CategoriesPages/All";
import Furnitures from "./components/CategoriesPages/Furnitures";
import Electronics from "./components/CategoriesPages/Electronics";
import Lamps from "./components/CategoriesPages/Lamps";
import Kitchen from "./components/CategoriesPages/Kitchen";
import Chairs from "./components/CategoriesPages/Chairs";
import SkinCare from "./components/CategoriesPages/SkinCare";
import ProductPage from "./pages/ProductPage";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./contexts/CartContext";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Toaster position="bottom-center" />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="furnitures" element={<Furnitures />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="lamps" element={<Lamps />} />
          <Route path="kitchen" element={<Kitchen />} />
          <Route path="chairs" element={<Chairs />} />
          <Route path="skin-care" element={<SkinCare />} />
        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
