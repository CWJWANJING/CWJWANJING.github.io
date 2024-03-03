import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css"

export default function GalleryColumn2() {
    return (
        <div className="gallery-column">
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/autumn.png"}
                    alt="Autumn"
                    className="gallery-image" />
                <div className="figcaption">Autumn</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/Amelie.png"}
                    alt="Amelie"
                    className="gallery-image" />
                <div className="figcaption">Amelie</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/thesummer.png"}
                    alt="The Summer"
                    className="gallery-image" />
                <div className="figcaption">The Summer</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/toot.PNG"}
                    alt="Too Cute To Toot"
                    className="gallery-image" />
                <div className="figcaption">Too Cute To Toot</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/picnic.PNG"}
                    alt="Picnic"
                    className="gallery-image" />
                <div className="figcaption">Picnic</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/mokapot.PNG"}
                    alt="Moka Pot"
                    className="gallery-image" />
                <div className="figcaption">Moka pot</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/merrychirstmas.JPG"}
                    alt="Merry Christmas!"
                    className="gallery-image" />
                <div className="figcaption">Merry Christmas!</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/leftright-1.png"}
                    alt="Left"
                    className="gallery-image" />
                <div className="figcaption">Left</div>
            </div>
        </div>
    )
}