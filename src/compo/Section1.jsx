import { Info } from "./Info"
import { useState } from 'react';
import { useEffect } from "react";
import "../Section1.css"
import citySvg from "../../assets/city.svg"

export function Section1() {

    return (
        <section className="section1">
            <h2 data-aos="fade-up">ABOUT US</h2>
            <Info />
            <img className="city" src={citySvg} alt="Una ciudad" />
        </section >
    )
}