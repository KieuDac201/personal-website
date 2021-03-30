import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route exact path="/">
          <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
