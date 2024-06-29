import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, useState } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap"

import Navbar from "./components/Navbar";
import StickyNav from "./components/StickyNav";
import ScrollToTop from "./components/ScrollToTop";

gsap.registerPlugin(ScrollTrigger);

const Homescreen = lazy(() => import("./screens/Homescreen"));

const App = () => {

  const location = useLocation();

  const [ navInView, setNavInView ] = useState(true);

  const handleNavOpacityToggle = (isInView) => {
    setNavInView(isInView)
  }

  return (
    <>
      <ScrollToTop navInView={navInView} />
      <StickyNav navInView={navInView} />
      <Navbar handleNavView={handleNavOpacityToggle}/>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Homescreen />} />
      </Routes>
    </>
  )
}

export default App;
