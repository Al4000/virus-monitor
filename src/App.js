import React from 'react';
import List from './List'
import logo from './logo.svg'
import './App.css';
import World from "./World";

function App() {
  return (
    <div className="app">
      <header className="app-header">
          <img src={logo} alt="" className="app-logo" />
          <h4>Coronavirus Monitor</h4>
          <h6>for Polytologs & Virusologs</h6>
      </header>
      <World />
      <List />
    </div>
  );
}

export default App;
