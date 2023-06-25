import { useState } from "react"
import logo from "../../assets/logo.svg"

export function Nav() {
    const [navStyle, setNavStyle] = useState({})
    window.onscroll = () => {
        window.scrollY > 0
            ? setNavStyle({ background: " var(--light-black)", backdropFilter:" blur(5px)"})
            : setNavStyle({})

}

return (
    <nav style={navStyle}>
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