import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div>
        <h1>Navbar</h1>
        <div>product playlist</div>
      </div>
    </div>
  );
}

export default App;
