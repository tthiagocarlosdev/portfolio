import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "../src/components/Main";
import Footer from "./components/Footer";


const App = () => {
  let [message, setMessage] = useState(`Portifólio`);

  return(
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
    
  )
}

export default App;