import quotesSvg from "../../assets/quotes.svg"
import "../Info3.css"

export function Info3({ orientation, imgUrl, name, text }) {

    return (
        <article
            style={{
                direction: orientation,
            }}
            data-aos="flip-up"
        >
            <div className="img">
                <img src={imgUrl} alt="A professional" />
            </div>
            <div className="text">
                <div className="name">{name}</div>
                <div className="quotes">
                    <img
                        className="quote"
                        style={{
                            width: "40px",
                            position: "absolute",
                            left: "-40px",
                            top: "35px"
                        }}
                        data-aos="fade-left"
                        src={quotesSvg}
                        alt="" />
                    <img
                        className="quote"
                        style={{
                            width: "40px",
                            position: "absolute",
                            right: "-10px",
                            bottom: "-35px",
                            rotate: "180deg",
                        }} 
                        data-aos="fade-left"
                        src={quotesSvg}
                        alt="" />
                    {text}
                </div>
            </div>
        </article>
    )

}