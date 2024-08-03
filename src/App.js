import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import TiaBrain from "./pages/PageComponents/miniComponents/HomePage/TiaBrain/Tiabrain.jsx";
import TiaEdge from "./pages/PageComponents/miniComponents/HomePage/TiaEdge/Tiaedge.jsx";
import TiaEnt from "./pages/PageComponents/miniComponents/HomePage/TiaEnt/Tiaent.jsx";
import TiaLive from "./pages/PageComponents/miniComponents/HomePage/TiaLive/Tialive.jsx";
import TiaMedia from "./pages/PageComponents/miniComponents/HomePage/TiaMedia/Tiamedia.jsx";
import TiaMock from "./pages/PageComponents/miniComponents/HomePage/TiaMock/Tiamock.jsx";
import TiaPlay from "./pages/PageComponents/miniComponents/HomePage/TiaPlay/Tiaplay.jsx";
import TiaShewin from "./pages/PageComponents/miniComponents/HomePage/TiaShewin/Tiashewin.jsx";
import TiaTest from "./pages/PageComponents/miniComponents/HomePage/TiaTest/Tiatest.jsx";
import About from './pages/PageComponents/miniComponents/HomePage/MainPage/AboutTheCompany/AboutTheCompany.jsx';
import Gallery from './pages/PageComponents/miniComponents/HomePage/MainPage/Gallery/GalleryCompany.jsx';
import LoadingPage from './pages/PageComponents/miniComponents/LoadingPage';

function App() {

    return (
      <div className="App">
        <Routes>
           <Route path="/" element={<Login />} />
           <Route path="/tiabrain" element={<TiaBrain />} />
           <Route path="/tiaedge" element={<TiaEdge />} />
           <Route path="/tiaent" element={<TiaEnt />} />
           <Route path="/tialive" element={<TiaLive />} />
           <Route path="/tiamedia" element={<TiaMedia />} />
           <Route path="/tiamock" element={<TiaMock />} />
           <Route path="/tiaplay" element={<TiaPlay />} />
           <Route path="/tiashewin" element={<TiaShewin />} />
           <Route path="/tiatest" element={<TiaTest />} />
           <Route path="/about" element={<About />} />
           <Route path="/gallery" element={<Gallery />} />
           </Routes>
      </div>
    ); 
}

export default App;
