import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css"

export default function GalleryColumn3() {
    return (
        <div className="gallery-column">
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/六本木.jpg"}
                    alt="Roppongi Japan"
                    className="gallery-image" />
                <div className="figcaption">Roppongi Japan</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/coolGirl.jpeg"}
                    alt="A cool girl"
                    className="gallery-image" />
                <div className="figcaption">A cool girl</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/gufeng.jpeg"}
                    alt="Ancient Chinese girl"
                    className="gallery-image" />
                <div className="figcaption">Ancient Chinese girl</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/me.jpeg"}
                    alt="Portrait"
                    className="gallery-image" />
                <div className="figcaption">Portrait</div>
            </div>
        </div>
    )
}