import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from './styles/GlobalStyle'

// Comps
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Borgverse from './pages/Borgverse';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/borgverse" element={<Borgverse />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
