import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header"
import SobreMim from "./components/SombreMim";
import Teste from "./components/Teste";


const App = () => {
  let [message, setMessage] = useState(`Portifólio`);

  return(
    <>
      <Header/>
      <div className="container">
        <h1>{message}</h1>
        
      </div>
      <button onClick={() => setMessage(`Welcome to React!`)}> mudar mensagem</button>
      <Teste/>
      <SobreMim/>
    </>
    
  )
}

export default App;