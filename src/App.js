import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import './styles/styles.css'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={ <Home /> }  />
        <Route path='/about' element={ <About /> }  />
        <Route path='/portfolio' element={ <Portfolio /> }  />
        <Route path='/contacts' element={ <Contacts /> }  />
      </Routes>
    </>
  );
}

export default App;
