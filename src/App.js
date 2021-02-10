import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Services from './components/Services';
import About from './components/About';
import Prices from './components/Prices';
import Contact from './components/Contact';
import Credis from './components/Credits';

function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <Services />
      <About />
      <Prices />
      <Contact />
      <Credis />
    </div>
  );
}

export default App;
