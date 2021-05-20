import './App.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import MyStack from "./pages/MyStack";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect, useState } from "react";


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
// const [portfolioArray, setPortfolioArray] = useState([])
let portfolioArray = [{
title:"Employee Directory",
gitHub:"https://github.com/iigonzoii/EmployeeDirectory",
deployedSite:"https://iigonzoii.github.io/EmployeeDirectory/",
img:"",
description:"React App geared towards managment that allows the user to view nonsensitive information about their employees. You can filter names by typing or sort employees alphabetically "
},
{
  title:"Weather Dashboard",
  gitHub:"https://github.com/iigonzoii/WeatherDashBoard",
  deployedSite:"https://iigonzoii.github.io/WeatherDashBoard/",
  img:"",
  description:"Use this application to find the current forecast and the upcoming fiveday forecast as well"
},
{
  title:"WorkDay Scheduler",
  gitHub:"https://github.com/iigonzoii/WorkDayScheduler",
  deployedSite:"https://iigonzoii.github.io/WorkDayScheduler/",
  img:"",
  description:"Responsive scheduler that breaks down your work day hour blocks by color. Itemizing your meetings by past, present, and future"
}]

  return (
    <>
    <Header />
    <Router>
    {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/mystack">MyStack</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        </div> */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/portfolio">
          <Portfolio />
        </Route>

        <Route path="/mystack">
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
