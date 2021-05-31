// ! my link isnt working here, i have it working on my project though. 
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
function Header () {
    return (
      <>
      <Router>
        <header className="sm:text-sm md:text-2xl lg:text-5xl  ">
      <ul className="flex bg-black lg:p-12 md:p-8 sm:p-4 ">

  <li className="mr-6 md:ml-4">
  
    <a className="text-blue-500 hover:text-blue-800 " href="about">About</a>
     
  </li>

  <li className="mr-6 md:ml-4">
    <a className="text-blue-500 hover:text-blue-800" href="Portfolio">Portfolio</a>
  </li>

  <li className="mr-6 md:ml-4">
    <a className="text-blue-500 hover:text-blue-800" href="Contact">Contact</a>
  </li>

  <li className="mr-6 md:ml-4">
    <a className="text-blue-500 hover:text-blue-800" href="Mystack">My Stack</a>
  </li>

</ul>
</header>

</Router>
      </>
    );
  }
  
  export default Header;