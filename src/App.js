import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Hero from './components/HeroSection';
import Home from './components/pages/Home';
import About from './components/About'
import Certification from './components/Certification'
import Contact from './components/Contact'



function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Hero />
        <About/>
        <Certification/>
        <Contact/>
        <Switch>
        </Switch>
        </Router>
    </>
  );
}

export default App;
