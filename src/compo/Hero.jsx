import { TypeAnimation } from 'react-type-animation';
import { Nav } from "./Nav"
import heroGirl from "../../assets/heroGirl.svg"
import "../Hero.css"

export function Hero() {


    return (
        <div className="hero">
            <Nav />
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
            <img className="heroGirl" src={heroGirl} alt="Una chica" />
        </div >
    )
}