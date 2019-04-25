import React from 'react';
import './App.css';
import UrlBar from './UrlBar.js';

function App() {
  return (
    <div className="App">
      <h1>
        Proxy Me, Bro!
      </h1>
      <p>Enter the URL you want to safely surf to:</p>
      <UrlBar />
    </div>
  );
}

export default App;
