import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () =>{
  return(
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" > <Home /> </Route>
      <Route exact path="/About"> <About /> </Route>
      <Route exact path="/Service"> <Service /> </Route>
      <Route exact path="/Contact"> <Contact /> </Route>
      <Redirect to = "/" />
    </Switch>
    <Footer />
    </>
    );
}

export default App;
