import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

import { navLinks, sectionLinks } from "../constants";

import { shoppingBag } from "../lib";

const Navbar = (props) => {
  const navRef = useRef();
  
  const location = useLocation();

  const isSignedIn = false;

  const updateNavVisibility = () => {
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
      onUpdate: updateNavVisibility
    })

    gsap.timeline({
      yoyo: true,
      repeat: -1,
      defaults: {
        ease: "none"
      }
    })
    .to(".promo1", {
      xPercent: -100,
      duration: 15,
    })
    .to(".promo2", {
      xPercent: -100,
      duration: 15,
    }, "<")
  }, [])

  useEffect(() => {
    updateNavVisibility();
  }, [])

  return (
    <nav ref={navRef} className='w-full h-[22vh] flex flex-col relative'>
      <div className={`w-full h-[20%] px-2 text-[12px] top-0 left-0 pt-1 transition-all duration-200 flex justify-between ${location.pathname === "/about" ? "opacity-0" : "opacity-100"}`}>
        <div className="flex gap-x-2 promo1">
          <p>10% OFF YOUR FIRST ORDER</p>
          <p>•</p>
          <p>FREE INTERNATIONAL SHIPPING ON ORDERS OVER $200</p>
        </div>
        <div className="flex gap-x-2 promo2 translate-x-[100%]">
          <p>10% OFF YOUR FIRST ORDER</p>
          <p>•</p>
          <p>FREE INTERNATIONAL SHIPPING ON ORDERS OVER $200</p>
        </div>
      </div>
      <div className="w-full h-[40%] flex items-center justify-between px-48">
        <h1 className="font-extrabold font-anton text-4xl">BLVCKBOARD</h1>
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
      </div>
      <div className="w-full h-[40%] flex items-end justify-center pb-5 px-48">
        <div className="w-full h-fit flex items-center justify-between">
          <div className="flex items-center gap-x-5 relative z-20">
            {sectionLinks.map((sectionlink, index) => (
              <Link to={sectionlink.link} key={sectionlink.id} index={index} className={`font-black tracking-tight hover-action transition-all ${location.pathname === sectionlink.link ? "bg-black text-white rounded-full px-3 p-1 deep-shadow" : "bg-slate-50 rounded-full text-black px-3 p-1 deep-shadow"}`}>{sectionlink.name}</Link>
            ))}
          </div>
          <div className="flex items-center gap-x-5">
            {navLinks.map((navlink, index) => (
              <div key={navlink.id} index={index} className="flex flex-col group">
                <Link to={navlink.link} className={`tracking-tight cursor-pointer transition-all font-medium ${navlink.name === "SALE" ? "text-red-600" : "text-black"}`}>{navlink.name}</Link>
                <span className={`group-hover:w-full transition-all duration-300 h-[2px] bg-black ${location.pathname === navlink.link ? "w-full" : "w-0"}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
