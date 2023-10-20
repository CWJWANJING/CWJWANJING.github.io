import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css"

export default function GalleryColumn2() {
    return (
        <div className="gallery-column">
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/webcomics/heavyMetal.jpg"}
                    alt="When your boyfriend loves heavy metal music, you just get used to it"
                    className="gallery-image" />
                <div className="figcaption">When your boyfriend loves heavy metal music</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/jealouskitty.jpeg"}
                    alt="Jealous Kitty"
                    className="gallery-image" />
                <div className="figcaption">Jealous Kitty</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/back.jpeg"}
                    alt="A woman's back view"
                    className="gallery-image" />
                <div className="figcaption">A woman's back view</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/buddapestHotel2.jpeg"}
                    alt="The Grand Budapest Hotel Scene 2"
                    className="gallery-image" />
                <div className="figcaption">The Grand Budapest Hotel Scene 2</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/queensGambit.jpeg"}
                    alt="The Queen's Gambit"
                    className="gallery-image" />
                <div className="figcaption">The Queen's Gambit</div>
            </div>
        </div>
    )
}