import './App.css';
import React from 'react';
import WelcomeF from './components/WelcomeF/WelcomeF';
import WelcomeC from './components/WelcomeC/WelcomeC';
import WelcomeArr from './components/WelcomeArr/WelcomeArr';
import Life from './components/Life/Life';
import Life2 from './components/Life2/Life2';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Life arg={100}/> */}
        <Life2 arg={200}/>
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
