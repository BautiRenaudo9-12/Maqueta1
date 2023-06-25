import { useEffect } from "react"

export function Info() {

    return (
        <div className="info">
            <div className="field" data-aos="fade-up" data-aos-duration="900">
                <h3>RATINGS</h3>
                <div className="number">5</div>
            </div>
            <div className="line"></div>
            <div className="field" data-aos="fade-up" data-aos-duration="900">
                <h3>PROYECTS</h3>
                <div className="number">15</div>
            </div>
            <div className="line"></div>
            <div className="field" data-aos="fade-up" data-aos-duration="900">
                <h3>CLIENTS</h3>
                <div className="number">23</div>
            </div>
        </div>
    )
}