import { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './App.css'
import { Hero } from "./compo/Hero"
import { Section1 } from "./compo/Section1"
import { Section2 } from "./compo/Section2"
import { Section3 } from "./compo/Section3"
import { Section4 } from "./compo/Section4"
import { Footer } from "./compo/Footer"
import AOS from "aos"
import "aos/dist/aos.css"

function App() {

  const [navItems, setNavItems] = useState([
    ["Home", "hero"],
    ["About us", "section1"],
    ["Contact", "section4"]
  ])

  useEffect(() => {
    AOS.init({ duration: 500 })
  }, [])


  return (
    <>
      <Hero navItems={navItems} />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer navItems={navItems} />
    </>
  )
}

export default App
