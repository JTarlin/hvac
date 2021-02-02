//package depedencies
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';

//component imports
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
      <Router>
          {/* render header regardless of page we're on */}
          <Header />
          {/* otherwise content depends on route */}
          <Switch>
            <Route exact path="/"> <Home />  </Route>
            <Route exact path="/signin"> <SignIn /> </Route>
            <Route exact path="/dashboard"> <Dashboard /> </Route>
          </Switch>
          {/* render footer regardless of what page we're on (sound familiar?) */}
          <Footer />
        </Router>
        </ParallaxProvider>
    </div>
  );
}

export default App;
