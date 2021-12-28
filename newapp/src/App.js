import './App.css';
import React from 'react';
import WelcomeF from './components/WelcomeF/WelcomeF';
import WelcomeC from './components/WelcomeC/WelcomeC';
import WelcomeArr from './components/WelcomeArr/WelcomeArr';

function App() {
  return (
    <div className="App">,
      <header className="App-header">
        <WelcomeF user='Oleg'/>
        <WelcomeF/>
        <WelcomeC user='Petr'/>
        <WelcomeC/>
        <WelcomeArr user='Alex'/>
        <WelcomeArr/>

      </header>
    </div>
  );
}

export default App;
