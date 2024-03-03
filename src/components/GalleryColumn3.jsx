import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css"

export default function GalleryColumn3() {
    return (
        <div className="gallery-column">
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
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/waterstonecafe1.jpeg"}
                    alt="waterstone cafe painting"
                    className="gallery-image" />
                <div className="figcaption">Waterstone cafe</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/jellycatBear.jpeg"}
                    alt="Jellycat Bear"
                    class="gallery-image" />
                <div className="figcaption">Jellycat Bear</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/jellycatPuppy.jpeg"}
                    alt="Jellycat Cream Puppy"
                    class="gallery-image" />
                <div className="figcaption">Jellycat Cream Puppy</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/buddapestHotel.jpeg"}
                    alt="The Grand Budapest Hotel Scene 1"
                    class="gallery-image" />
                <div className="figcaption">The Grand Budapest Hotel Scene 1</div>
            </div>
        </div>
    )
}