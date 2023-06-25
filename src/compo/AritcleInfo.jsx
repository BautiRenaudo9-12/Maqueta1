import arrowSvg from "../../assets/arrow.svg"

export function AritcleInfo({ info }) {

    return (
        <div className="aritcle-info" data-aos="slide-right" data-aos-duration="900">
            <p>{info}</p>
            <button><img src={arrowSvg} alt="flecha" /></button>
        </div>
    )
}