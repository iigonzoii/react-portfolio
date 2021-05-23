// ! my link isnt working here, i have it working on my project though. 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Header () {
    return (
      <>
      <Router>
        <header className="text-3xl  ">
      <ul className="flex bg-black p-12">
  <li className="mr-6">
    <Link to="/about">
    <span className="text-blue-500 hover:text-blue-800 ">
      About
      </span>
    </Link>
  </li>

  <li className="mr-6">
    <a className="text-blue-500 hover:text-blue-800" href="Portfolio">Portfolio</a>
  </li>

  <li className="mr-6">
    <a className="text-blue-500 hover:text-blue-800" href="Contact">Contact</a>
  </li>

  <li className="mr-6">
    <a className="text-blue-500 hover:text-blue-800" href="Mystack">My Stack</a>
  </li>

</ul>
</header>
</Router>

      </>
    );
  }
  
  export default Header;