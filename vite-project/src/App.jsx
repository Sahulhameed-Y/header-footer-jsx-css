import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './components/Blog';

import BlogDetail from "./components/BlogDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  return (
    <>
   
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Blog/>} />
        <Route path="/post/:id" element={<BlogDetail />} />
      </Routes>
        <Footer/>
    </BrowserRouter>
  
    </>
  );
}

export default App;
