import { Link, useLocation } from "react-router-dom";

import { navLinks } from "../constants";

import { shoppingBag } from "../lib";

const StickyNav = (props) => {

    const location = useLocation();

    const isSignedIn = false;

  return (
    <nav style={{
      transform: props.navInView ? "translateY(-100%)" : "translateY(0)"
    }} className={`w-full h-[10vh] px-48 flex items-center justify-between bg-white fixed z-[100] top-0 left-0 transition-all duration-200`}>
        <h1 className="font-extrabold font-anton text-4xl">BLVCKBOARD</h1>
        <div className="flex items-center gap-x-5">
            {navLinks.map((navlink, index) => (
              <div key={navlink.id} index={index} className="flex flex-col group">
                <Link to={navlink.link} className={`${location.pathname === navlink.link ? "bg-black text-white rounded-full px-3 p-1" : "bg-none text-black rounded-0 p-0"} tracking-tight cursor-pointer transition-all font-medium ${navlink.name === "SALE" ? "text-red-600" : "text-black"}`}>{navlink.name}</Link>
                <span className={`group-hover:w-full transition-all duration-300 h-[2px] bg-black ${location.pathname === navlink.link ? "w-full" : "w-0"}`} />
              </div>
            ))}
        </div>
        <div className="flex items-center gap-x-6">
          {isSignedIn ? 
            <p className="font-black tracking-tight text-lg hover-action">ACCOUNT</p>
          :
            <p className="font-black tracking-tight text-lg hover-action">LOGIN</p>
          }
          <div className="relative">
            <div className="w-4 h-4 rounded-full bg-red-600 absolute z-20 pointer-events-none top-0 right-0 flex items-center justify-center">
              <p className="font-medium text-[12px] text-white">0</p>
            </div>
            <img src={shoppingBag} className="hover-action size-10 object-cover" />
          </div>
        </div>
    </nav>
  )
}

export default StickyNav;
