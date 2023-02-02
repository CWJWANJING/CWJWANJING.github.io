import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css"

export default function GalleryColumn2() {
    return (
        <div class="gallery-column">
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/jealouskitty.jpeg"}
                    alt="Jealous Kitty"
                    class="gallery-image" />
                <div className="figcaption">Jealous Kitty</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/back.jpeg"}
                    alt="A woman's back view"
                    class="gallery-image" />
                <div className="figcaption">A woman's back view</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/buddapestHotel2.jpeg"}
                    alt="The Grand Budapest Hotel Scene 2"
                    class="gallery-image" />
                <div className="figcaption">The Grand Budapest Hotel Scene 2</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/queensGambit.jpeg"}
                    alt="The Queen's Gambit"
                    class="gallery-image" />
                <div className="figcaption">The Queen's Gambit</div>
            </div>
        </div>
    )
}