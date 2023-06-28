import { Info3 } from "../compo/Info3"
import professional1 from "../../assets/professional1.png"
import professional2 from "../../assets/professional2.png"

export function Section3() {

    const info3Array = [
        {
            imgUrl: professional1,
            name: "John Doe",
            text: "En cada línea de código, se encuentra el poder de crear y transformar. Un destello digital que encierra innovación, lógica y creatividad. Que esta foto inspire tu pasión por la informática y te recuerde que en cada bit se encuentra el potencial para cambiar el mundo",
        },
        {
            imgUrl: professional2,
            name: "Mary Stone",
            text: "En cada línea de código, se encuentra el poder de crear y transformar. Un destello digital que encierra innovación, lógica y creatividad. Que esta foto inspire tu pasión por la informática y te recuerde que en cada bit se encuentra el potencial para cambiar el mundo",
        }
    ]

    return (
        <section className="section3">
            {
                info3Array.map(({ imgUrl, name, text }, i) => {
                    return <Info3
                        key={i}
                        orientation={i % 2 != 0 ? "ltr" : "rtl"}
                        imgUrl={imgUrl}
                        name={name}
                        text={text} />
                })
            }
        </section>
    )
}