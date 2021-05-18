import './App.css';
import About from "./pages/About"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import MyStack from "./pages/MyStack"
import Footer from "./components/Footer"
import Header from "./components/Header"

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Header />
    <h1> hello world</h1>
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/portfolio">
          <Portfolio />
        </Route>

        <Route path="/technologies">
          <MyStack />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

      </Switch>
    </Router>
<Footer />
    </>
  );
}

export default App;
