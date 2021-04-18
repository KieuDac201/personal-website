import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
import "./style/Responsive.css";


function App() {

  
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route path="/resume" component={Resume} />

          <Route path="/project" component={Project} />

          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={About} />
          <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
