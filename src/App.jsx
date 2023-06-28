import { useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import './App.css'
import { Hero } from "./compo/Hero"
import { Section1 } from "./compo/Section1"
import { Section2 } from "./compo/Section2"
import { Section3 } from "./compo/Section3"
import AOS from "aos"
import "aos/dist/aos.css"

function App() {

  useEffect(() => {
    AOS.init({ duration: 500 })
  }, [])

  return (
    <>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  )
}

export default App
