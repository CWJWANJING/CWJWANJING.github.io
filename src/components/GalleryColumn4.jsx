import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css"

export default function GalleryColumn4() {
    return (
        <div className="gallery-column ">
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
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/lisbon.JPG"}
                    alt="Lisbon"
                    className="gallery-image" />
                <div className="figcaption">Lisbon</div>
            </div>
        </div>
    )
}