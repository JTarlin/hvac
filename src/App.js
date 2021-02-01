//package depedencies
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';

//component imports
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

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
            {/* <Route exact path="/webdev" render={()=> <WebDev animStyle={animStyle} setAnimStyle={setAnimStyle}/>} />
            <Route exact path="/gamedev" render={()=> <GameDev animStyle={animStyle} setAnimStyle={setAnimStyle}/>} />
            <Route path="/webdev/lightspeed" render={()=> <Lightspeed animStyle={animStyle} setAnimStyle={setAnimStyle}/>} />
            <Route path="/webdev/postal" render={()=> <Postal animStyle={animStyle} setAnimStyle={setAnimStyle}/>} />
            <Route path="/gamedev/labyrinth" render={()=> <Labyrinth animStyle={animStyle} setAnimStyle={setAnimStyle}/>} />
            <Route path="/gamedev/wordworlds" render={()=> <WordWorlds animStyle={animStyle} setAnimStyle={setAnimStyle}/>} /> */}
          </Switch>
          {/* // render footer regardless of what page we're on (sound familiar?)
          <Footer /> */}
        </Router>
        </ParallaxProvider>
    </div>
  );
}

export default App;
