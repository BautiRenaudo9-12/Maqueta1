import lightBar from "../../assets/section2-light-bar.svg"
import { AritcleInfo } from "./AritcleInfo"

export function Info2() {
    const INFO_ARRAY = ["Cada línea escrita es un paso hacia la materialización de un sueño",
        "La programación es el arte de dar vida a las ideas a través del código",
        " Tu perseverancia y creatividad son las herramientas clave para construir el futuro digital que todos anhelamos."]

    return (
        <article>
            <img className="light-bar" src={lightBar} alt="light-bar" />
            {
                INFO_ARRAY.map((info, i) => < AritcleInfo key={i} info={info} />)
            }
        </article>
    )
}