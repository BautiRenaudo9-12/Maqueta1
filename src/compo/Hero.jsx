import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';
import { Nav } from "./Nav"
import { Nav2 } from "./Nav2"
import heroGirl from "../../assets/heroGirl.png"
import "../Hero.css"

export function Hero({ navItems }) {
    const [navStyle, setNavStyle] = useState({})
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [heroGirlStyles, setHeroGirlStyles] = useState({ width: "150px" })

    useEffect(() => {
        setTimeout(() => {
            setHeroGirlStyles({ width: "250px" })
        }, 200);
    })

    window.onscroll = () => {
        window.scrollY > 0
            ? setNavStyle({ background: " var(--light-black)", backdropFilter: " blur(5px)" })
            : setNavStyle({})
    }
    window.onresize = () => {
        setWindowWidth(window.innerWidth)
    }

    return (
        <div className="hero" id='hero'>
            {
                windowWidth > 600
                    ? <Nav navStyle={navStyle} navItems={navItems} />
                    : <Nav2 navStyle={navStyle} navItems={navItems} />
            }
            <div className="middle">
                <TypeAnimation
                    sequence={[
                        'Revolution of this era. ',
                        2000,
                        'Simplifing the world. ',
                        2000,
                        'We are here for you. ',
                        2000,
                    ]}
                    wrapper="h1"
                    cursor={true}
                    repeat={Infinity}
                />
                <a href="#section1">
                    <button>
                        GO
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.51501 8.465L12 16.95L20.485 8.465L19.071 7.05L12 14.122L4.92901 7.05L3.51501 8.465Z" fill="#fff" />
                        </svg>
                    </button>
                </a>
            </div>
            <img
                style={heroGirlStyles}
                className="heroGirl" src={heroGirl} alt="Una chica" />
        </div >
    )
}