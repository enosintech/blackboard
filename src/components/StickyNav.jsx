import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";

const StickyNav = (props) => {

    const isSignedIn = false;

  return (
    <nav className={`w-full h-[10vh] px-48 flex items-center deep-shadow justify-between bg-white fixed z-[100] top-0 left-0 transition-all duration-200 ${props.navInView ? "-translate-y-[100%]" : "translate-y-0"}`}>
        <h1 className="font-extrabold font-anton text-4xl">BLVCKBOARD</h1>
        <div className="flex items-center gap-x-5">
            {navLinks.map((navlink, index) => (
                <Link to={navlink.link} key={navlink.id} index={index} className={`${location.pathname === navlink.link ? "bg-black text-white rounded-full px-3 p-1" : "bg-none text-black rounded-0 p-0"} tracking-tight hover-action transition-all font-medium ${navlink.name === "SALE" ? "text-red-600" : "text-black"}`}>{navlink.name}</Link>
            ))}
        </div>
        <div className="flex items-center gap-x-6">
          {isSignedIn ? 
            <p className="font-bold tracking-tight text-lg hover-action">ACCOUNT</p>
          :
            <p className="font-bold tracking-tight text-lg hover-action">LOGIN</p>
          }
          <FontAwesomeIcon icon={faCartShopping} size="xl" className="hover-action"/>
        </div>
    </nav>
  )
}

export default StickyNav;
