import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div>
        <Navbar />
        <div>product playlist</div>
      </div>
    </div>
  );
}

export default App;
