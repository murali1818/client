import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Main/Sidebar";
import InvoiceGenerator from "./products/InvoiceGenerator";
import AllProducts from "./products/AllProducts";
import Products from "./products/Products";
import ProductDetails from "./products/ProductDetails";
import ProductPage from "./products/ProductPage";

const Main = () => {
  return (
    
      <div className="flex mt-16">
        {/* Sidebar - Fixed Position */}
        <Sidebar />

        {/* Main Content - Scrollable if Overflow */}
        <div className="ml-64 flex-1   text-white     bg-gray-100">
          <Routes>
            <Route path="/billing" element={<InvoiceGenerator />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/price-analysis" element={<Products />} />
            <Route path="/price-analysis/product/:id" element={<ProductDetails />} />
            <Route path="/wholesalers" element={<Products />} />
            <Route path="/wholesalers/product/:id" element={<ProductDetails />} />
            <Route path="/products" element={<ProductPage />} />
          </Routes>
        </div>
      </div>
    
  );
};

export default Main;
