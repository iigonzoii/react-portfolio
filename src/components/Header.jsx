
import {Link} from "react-router-dom"
function Header () {
    return (
      <>
     
        {/* <header className="sm:text-sm md:text-2xl lg:text-5xl  ">
      <ul style={{backgroundColor:"#320AD7"}} className="flex lg:p-12 md:p-8 sm:p-4 ">

  <li className="mr-6 md:ml-4 text-black hover:text-blue-500">
  
    <Link to="/about" className={window.location.pathname === "/about"}>
      About
    </Link>   

  </li>

  <li className="mr-6 md:ml-4 text-black hover:text-blue-500">
  <Link to="/portfolio" className={window.location.pathname === "/portfolio"}
    >Portfolio
 </Link>
  </li>

  <li className="mr-6 md:ml-4 text-black hover:text-blue-500">
  <Link to="/contact" className={window.location.pathname === "/contact"}>
    Contact
    </Link>
  </li>

  <li className="mr-6 md:ml-4 text-black hover:text-blue-500">
  <Link to="/mystack" className={window.location.pathname === "/mystack "}>
    My Stack
    </Link>
  </li>
</ul>
</header> */}

<nav class="text-3xl font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
  <div class="mb-2 sm:mb-0">
  <Link to="/about" className={window.location.pathname === "/about"}>
      About
    </Link> 
  </div>
  <div>
    <span className="text-3xl no-underline text-grey-darkest hover:text-blue-dark ml-2">
  <Link to="/portfolio" className={window.location.pathname === "/portfolio"}
    >Portfolio
 </Link>
 </span>
 <span className="text-3xl no-underline text-grey-darkest hover:text-blue-dark ml-2">
 <Link to="/contact" className={window.location.pathname === "/contact"}>
    Contact
    </Link>
    </span>
    <span className="text-3xl no-underline text-grey-darkest hover:text-blue-dark ml-2">
 <Link to="/mystack" className={window.location.pathname === "/mystack "}>
    My Stack
    </Link>
    </span>
  </div>
</nav>

      </>
    );
  }
  
  export default Header;