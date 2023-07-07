import { useState } from "react"
import logo from "../../assets/logo.svg"

export function Nav({navStyle}) {

    return (
        <nav className="nav1" style={navStyle}>
            <div className="logo">
                <img className="logo" src={logo} alt="Logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}