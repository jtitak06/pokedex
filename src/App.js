import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokedex from "./Pokedex.js";
import Pokemon from "./Pokemon.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/:pokemonId" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
