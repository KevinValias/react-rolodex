import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './Components/ListItems';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <ListItems/>
       
      </header>
    </div>
  );
}

export default App;
