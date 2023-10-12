import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css"

export default function GalleryColumn1() {
    return (
        <div className="gallery-column">
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/windy.JPG"}
                    alt="A story about I named myself Windy in high school, and my british boyfriend made fun of me"
                    className="gallery-image" />
                <div className="figcaption">My name is Windy</div>
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