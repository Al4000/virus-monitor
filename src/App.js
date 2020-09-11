import React from 'react';
import Image from './Image'
import logo from './logo.svg'
import './App.css';
import World from "./World";
import Russia from "./Russia";

function App() {
  return (
    <div className="app">
      <header className="app-header">
          <img src={logo} alt="" className="app-logo" />
          <h4>Coronavirus Monitor</h4>
          <h6>for Polytologs & Virusologs</h6>
      </header>
      <div className="wrap">
        <World />
        <Russia />
      </div>
      <Image />
    </div>
  );
}

export default App;
