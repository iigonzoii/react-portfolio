import "./App.css";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/Contact";
import PortfolioPage from "./pages/PortfolioPage/Portfolio";
import Header from "./components/Header";
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  
  return (
    <>
      <Router>
        <div>
      <Header />
          <Route exact path="/" component={AboutPage} />
          <Route exact path="/about" component={AboutPage} />
          
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
        </div>
      
      </Router>

      
    </>
  );
}

export default App;
