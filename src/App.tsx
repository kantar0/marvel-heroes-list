import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CharacterDetails from "./pages/CharacterDetails";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="container mx-auto py-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </div>
  );
};

export default App;
