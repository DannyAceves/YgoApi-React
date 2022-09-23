import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  {Home}  from "./pages/Home";
import  {Carta}  from "./components/Cartas/Carta";
import {Navbar} from "./components/Navbar/Navbar";


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
