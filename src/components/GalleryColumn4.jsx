import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css"

export default function GalleryColumn4() {
    return (
        <div className="gallery-column ">
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/satyr.jpeg"}
                    alt="Head of a satyr"
                    className="gallery-image" />
                <div className="figcaption">Head of a satyr</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/jigsawKitty.png"}
                    alt="Kitty playing jigsaw"
                    className="gallery-image" />
                <div className="figcaption">Kitty playing jigsaw</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/rapeseed.png"}
                    alt="Rapeseed sea"
                    className="gallery-image" />
                <div className="figcaption">Rapeseed sea</div>
            </div>
        </div>
    )
}