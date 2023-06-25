import { Info } from "./Info"
import { useState } from 'react';
import { useEffect } from "react";
import Logo from "../../assets/biggerLogo.svg"
import { Info2 } from "./Info2"

export function Section2() {

    return (
        <section className="section2">
            <img className="logo" src={Logo} alt="Logo" />
            <Info2 />
        </section >
    )
}