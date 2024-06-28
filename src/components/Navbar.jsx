import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { navLinks, sectionLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
  const navRef = useRef();
  
  const location = useLocation();

  const isSignedIn = false;

  const updateValues = () => {
    if(ScrollTrigger.isInViewport(navRef.current)){
      props.handleNavView(true)
    } else {
      props.handleNavView(false)
    }
  }

  useGSAP(() => {
    ScrollTrigger.create({
      start: 0,
      end: ScrollTrigger.maxScroll(window),
      onUpdate: updateValues
    })
  }, [])

  useEffect(() => {
    updateValues();
  }, [])

  return (
    <nav ref={navRef} className='w-full h-[18vh] flex flex-col px-48'>
      <div className="w-full h-1/2 flex items-center justify-between">
        <h1 className="font-extrabold font-anton text-4xl">BLVCKBOARD</h1>
        <div className="flex items-center gap-x-6">
          {isSignedIn ? 
            <p className="font-bold tracking-tight text-lg hover-action">ACCOUNT</p>
          :
            <p className="font-bold tracking-tight text-lg hover-action">LOGIN</p>
          }
          <FontAwesomeIcon icon={faCartShopping} size="xl" className="hover-action"/>
        </div>
      </div>
      <div className="w-full h-1/2 flex items-end justify-center pb-5">
        <div className="w-full h-fit flex items-center justify-between">
          <div className="flex items-center gap-x-5">
            {sectionLinks.map((sectionlink, index) => (
              <Link to={sectionlink.link} key={sectionlink.id} index={index} className={`font-medium tracking-tight hover-action transition-all ${location.pathname === sectionlink.link ? "bg-black text-white rounded-full px-3 p-1" : "bg-none text-black rounded-0 p-0"}`}>{sectionlink.name}</Link>
            ))}
          </div>
          <div className="flex items-center gap-x-5">
            {navLinks.map((navlink, index) => (
              <Link to={navlink.link} key={navlink.id} index={index} className={`${location.pathname === navlink.link ? "bg-black text-white rounded-full px-3 p-1" : "bg-none text-black rounded-0 p-0"} tracking-tight hover-action transition-all font-medium ${navlink.name === "SALE" ? "text-red-600" : "text-black"}`}>{navlink.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
