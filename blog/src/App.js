import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home/Home";
import About from "./pages/about/About";

//Componentes
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Register from "./pages/register/Register";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="register" element={<Register />}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
