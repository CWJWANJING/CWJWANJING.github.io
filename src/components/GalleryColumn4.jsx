import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css"

export default function GalleryColumn4() {
    return (
        <div className="gallery-column ">
            <div className="gallery-link">
                <StaticImage src="../images/artwork/me.jpeg"
                    alt="Portrait"
                    className="gallery-image" />
                <div className="figcaption">Portrait</div>
            </div>
            <div className="gallery-link">
                <StaticImage src="../images/artwork/jigsawKitty.png"
                    alt="Kitty playing jigsaw"
                    className="gallery-image" />
                <div className="figcaption">Kitty playing jigsaw</div>
            </div>
            <div className="gallery-link">
                <StaticImage src="../images/artwork/lisbon.JPG"
                    alt="Lisbon"
                    className="gallery-image" />
                <div className="figcaption">Lisbon</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/seaside.png"}
                    alt="Seaside"
                    className="gallery-image" />
                <div className="figcaption">Seaside</div>
            </div>
        </div>
    )
}