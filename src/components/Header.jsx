// ! my link isnt working here, i have it working on my project though. 
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { HashRouter, Route, Link } from "react-router-dom";
import {Link} from "react-router-dom"
function Header () {
    return (
      <>
     
        <header className="sm:text-sm md:text-2xl lg:text-5xl  ">
      <ul className="flex bg-black lg:p-12 md:p-8 sm:p-4 ">

  <li className="mr-6 md:ml-4 text-blue-500 hover:text-blue-800">
  
     <Link to="/about" className={window.location.pathname === "/about"}>
     About
    </Link>
     
  </li>

  <li className="mr-6 md:ml-4 text-blue-500 hover:text-blue-800">
  <Link to="/portfolio" className={window.location.pathname === "/portfolio"}
    >Portfolio
 </Link>
  </li>

  <li className="mr-6 md:ml-4 text-blue-500 hover:text-blue-800">
  <Link to="/contact" className={window.location.pathname === "/contact"}>
    Contact
    </Link>
  </li>

  <li className="mr-6 md:ml-4 text-blue-500 hover:text-blue-800">
  <Link to="/mystack" className={window.location.pathname === "/mystack "}>
    My Stack
    </Link>
  </li>

</ul>
</header>


      </>
    );
  }
  
  export default Header;