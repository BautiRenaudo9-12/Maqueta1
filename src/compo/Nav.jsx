import { useState } from "react"
import logo from "../../assets/logo.svg"

export function Nav({ navStyle, navItems }) {

    return (
        <nav className="nav1" style={navStyle}>
            <div className="logo">
                <img className="logo" src={logo} alt="Logo" />
            </div>
            <ul>
                {
                    navItems.map(([name, idFor], i) => {
                        return <li key={i} ><a href={"#" + idFor}>{name}</a></li>
                    })
                }
            </ul>
        </nav>
    )
}