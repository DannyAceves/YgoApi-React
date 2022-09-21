import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  {Home}  from "./components/Home";
import  {Carta}  from "./components/Carta";
import Navbar from "./components/Navbar";
import { Cards }  from "./components/Cards";



export const App = () => {
  

  return (
    <>
      <Navbar brand="YugiOh!" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Carta/:id" element={<Carta></Carta>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>

  );
}
