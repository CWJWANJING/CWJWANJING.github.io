import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css"

export default function GalleryColumn4() {
    return (
        <div class="gallery-column ">
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/satyr.jpeg"}
                    alt="Head of a satyr"
                    class="gallery-image" />
                <div className="figcaption">Head of a satyr</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/jigsawKitty.png"}
                    alt="Kitty playing jigsaw"
                    class="gallery-image" />
                <div className="figcaption">Kitty playing jigsaw</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/rapeflowers.png"}
                    alt="Rapeflower sea"
                    class="gallery-image" />
                <div className="figcaption">Rapeflower sea</div>
            </div>
        </div>
    )
}