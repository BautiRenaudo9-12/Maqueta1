import characterSvg from "../../assets/character.svg"
import cubeSvg from "../../assets/cube.svg"
import {Form} from "../compo/Form"

export function Section4() {

    return (
        <section className="section4"  id="section4">
            <h2 data-aos="fade-up">CONTACT</h2>
            <img className="character" src={characterSvg} alt="" />
            <img className="cube" src={cubeSvg} alt="" />
            <Form />
        </section>
    )

}