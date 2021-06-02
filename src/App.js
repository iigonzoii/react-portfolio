import "./App.css";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/Contact";
import PortfolioPage from "./pages/PortfolioPage/Portfolio";

import MyStack from "./pages/MyStackPage/MyStack";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect, useState } from "react";

import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  // const [portfolioArray, setPortfolioArray] = useState([])
  

  return (
    <>
      <Router>
        <div>
      <Header />
          <Route exact path="/" component={AboutPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/mystack" component={MyStack} />
          <Route exact path="/contact" component={ContactPage} />
          <Route
            exact
            path="/portfolio"
            component={PortfolioPage}
            
          />
        </div>
      </Router>
      {/* <Router>
        
        <Switch>
        <Route path="/">
            <AboutPage />
          </Route>
        
          <Route exact path="/about">
            <AboutPage />
          </Route>

          <Route exact path="/portfolio">
            <PortfolioPage portfolioArray={portfolioArray} />
          </Route>

          <Route exact path="/mystack">
            <MyStack />
          </Route>

          <Route exact path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </Router> */}
     
      <Footer />
    </>
  );
}

export default App;
