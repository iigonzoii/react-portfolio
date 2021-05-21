import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Header () {
    return (
      <>
      <Router>
      <ul class="flex bg-black ">
  <li class="mr-6">
    <Link to="/about">
    <span class="text-blue-500 hover:text-blue-800">About</span>
    </Link>
  </li>
  <li class="mr-6">
    <a class="text-blue-500 hover:text-blue-800" href="Portfolio">Portfolio</a>
  </li>
  <li class="mr-6">
    <a class="text-blue-500 hover:text-blue-800" href="Contact">Contact</a>
  </li>
  <li class="mr-6">
    <a class="text-blue-500 hover:text-blue-800" href="Mystack">My Stack</a>
  </li>
</ul>
</Router>

      </>
    );
  }
  
  export default Header;