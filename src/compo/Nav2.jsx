import { useState } from "react"
import logo from "../../assets/logo.svg"
import navButton from "../../assets/navButton.svg"

export function Nav2({ navStyle, navItems }) {
    const [indiceNav, setIndiceNav] = useState(0)

    
    return (
        <nav className="nav2">
            <div className="logo">
                <img className="logo" src={logo} alt="Logo" />
            </div>
            <div className="nav-button">
                <img
                    src={navButton}
                    alt=""
                    onClick={() => { setIndiceNav(!indiceNav) }}
                />
            </div>
            <ul style={indiceNav == 0 ?
                {
                    width: "0",
                    translate: "100px 0"
                } :
                {
                    width: "100%",
                    translate: "0 0"
                }}>
                {
                    navItems.map(([name, idFor], i) => {
                        return <li key={i} ><a href={"#" + idFor}>{name}</a></li>
                    })
                }
            </ul>
        </nav>
    )
}