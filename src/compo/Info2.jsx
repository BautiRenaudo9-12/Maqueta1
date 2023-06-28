import lightBar from "../../assets/section2-light-bar.svg"
import { AritcleInfo } from "./AritcleInfo"

export function Info2() {
    const infoArray = ["Cada línea escrita es un paso hacia la materialización de un sueño",
        "La programación es el arte de dar vida a las ideas a través del código",
        " Tu perseverancia y creatividad son las claves para construir nuestro el futuro digital."]

    return (
        <article>
            <img className="light-bar" src={lightBar} alt="light-bar" />
            {
                infoArray.map((info, i) => < AritcleInfo key={i} info={info} />)
            }
        </article>
    )
}