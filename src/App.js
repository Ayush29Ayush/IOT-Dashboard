import React from "react";
import './App.css';
import Header from "./Header/Header";
import Temp from "./Cards/temp";
import SpO2 from "./Cards/spo2";
import Pulse from "./Cards/pulse";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Cards" style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
      <Temp/>
      <SpO2/>
      <Pulse/>
      </div>
      
    </div>
     
  );
}

export default App;
