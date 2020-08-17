import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Meditate from './components/Meditate';

function App() {
  return (
    <div className="App">
      <h4>Navbar will go up here</h4>
      <LandingPage />
      <Meditate />
    </div>
  );
}

export default App;
