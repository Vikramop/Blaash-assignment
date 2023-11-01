import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div>
        <Navbar />
        <Products />
      </div>
    </div>
  );
}

export default App;
