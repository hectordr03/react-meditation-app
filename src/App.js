import React from 'react';
import classes from './App.module.css';
import LandingPage from './components/LandingPage'
import Meditate from './components/Meditate';

function App() {
  return (
    <div className={ classes.App }>
      <h4>Navbar will go up here</h4>
      <LandingPage />
      <Meditate />
    </div>
  );
}

export default App;
