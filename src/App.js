import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import MyStack from "./pages/MyStack";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect, useState } from "react";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  // const [portfolioArray, setPortfolioArray] = useState([])
  let portfolioArray = [
    {
      title: "Employee Directory",
      gitHub: "https://github.com/iigonzoii/EmployeeDirectory",
      deployedSite: "https://iigonzoii.github.io/EmployeeDirectory/",
      img: "https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/reactDirScaled2.jpg?alt=media&token=e704d7ed-9068-481e-b409-e2fe44b3874f",
      description:
        "React App geared towards managment that allows the user to view nonsensitive information about their employees. You can filter names by typing or sort employees alphabetically ",
    },
    {
      title: "Weather Dashboard",
      gitHub: "https://github.com/iigonzoii/WeatherDashBoard",
      deployedSite: "https://iigonzoii.github.io/WeatherDashBoard/",
      img: "",
      description:
        "Use this application to find the current forecast and the upcoming fiveday forecast as well",
    },
    {
      title: "WorkDay Scheduler",
      gitHub: "https://github.com/iigonzoii/WorkDayScheduler",
      deployedSite: "https://iigonzoii.github.io/WorkDayScheduler/",
      img: "placeholder",
      description:
        "Responsive scheduler that breaks down your work day hour blocks by color. Itemizing your meetings by past, present, and future",
    },
  ];

  

  // ? Project three structure, css not working(stucture), duplicate folders

  return (
    <>
      <div className="grid grid-cols-2 gap-4 portfolio-grid">
        {portfolioArray.map((each, index) => {
          return (
            <div key={index}>
              <h1>{each.title}</h1>
              <a href={each.gitHub} rel="noreferrer" target="_blank">
                Github
              </a>
              <p>{each.deployedSite}</p>
              <img src={each.img} alt={each.title} />
              <p>{each.description}</p>
            </div>
          );
        })}
      </div>


      <Header />

      <Router>
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
