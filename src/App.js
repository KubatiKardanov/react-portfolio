import React from 'react';
import './App.css';  


import About from './components/About';
import Description from './components/Description';
import Header from './components/Header';



function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <About />
    </div>
  );
}

export default App;
