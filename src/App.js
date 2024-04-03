import { Component } from "react";
import "./App.css";
import Footer from "./component/Footer/Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Popular from "./pages/klas/Leagues.js";
import TopRated from "./pages/klas/Team.js";
import Detail from "./pages/klas/Detail.js";
import Navbar from "./component/Navbar/Navbar.js";


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leagues" element={<Popular />} />
          <Route path="/team" element={<TopRated />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
      {/* <Main /> */}
      <Footer nama="Yuichi" />
    </div>
  );
}

export default App;
