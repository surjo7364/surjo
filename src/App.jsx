import Navbar from "./components/Navbar";
import React from 'react'
import Home from "./components/Home"
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import {Toaster} from "react-hot-toast";


const App = () => {
  return (
    <>
      <div>
          <Navbar/>
          <Home/>
          <About/>
          <Portfolio/>
          <Experiance/>
          <Contact/>
          <Footer/>
      </div>
      <Toaster />

    
    </>
  )
}

export default App