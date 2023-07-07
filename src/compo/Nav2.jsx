import { useState } from "react"
import logo from "../../assets/logo.svg"

export function Nav2() {
    const[indiceNav, setIndiceNav] = useState(0)

    return (
        <nav className="nav2">
            <div className="logo">
                <img className="logo" src={logo} alt="Logo" />
            </div>
            <div className="nav-button">
                <div className="line1">-</div>
                <div className="line2">-</div>
                <div className="line3"></div>
            </div>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}