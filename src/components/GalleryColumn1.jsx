import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css"

export default function GalleryColumn1() {
    return (
        <div className="gallery-column">
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/us.PNG"}
                    alt="Portrait of us"
                    className="gallery-image" />
                <div className="figcaption">Us</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/seaside.png"}
                    alt="Seaside"
                    className="gallery-image" />
                <div className="figcaption">Seaside</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/island.png"}
                    alt="Island"
                    className="gallery-image" />
                <div className="figcaption">Island</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/heartstopper.PNG"}
                    alt="Heartstopper"
                    className="gallery-image" />
                <div className="figcaption">Heartstopper</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/love.PNG"}
                    alt="Love"
                    className="gallery-image" />
                <div className="figcaption">Love</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/genevaSeat.png"}
                    alt="Geneva Broken Seat"
                    className="gallery-image" />
                <div className="figcaption">Geneva Broken Seat</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/cozyVibe.png"}
                    alt="Being Cozy Together"
                    className="gallery-image" />
                <div className="figcaption">Being Cozy Together</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/me?.PNG"}
                    alt="Kitty going: Me?"
                    className="gallery-image" />
                <div className="figcaption">Me?</div>
            </div>
        </div>
    )
}