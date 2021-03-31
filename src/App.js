import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import './style/Responsive.css'
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
        
        <Route path="/resume" component={Resume} />

        <Route path="/project" component={Project} />

        <Route path="/contact" component={Contact} />
        <Route  path="/" component={About} />
        

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
