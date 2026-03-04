import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css"

export default function GalleryColumn3() {
    return (
        <div className="gallery-column">
            <div className="gallery-link">
                <StaticImage src="../images/artwork/克罗地亚小猫咪吃鱼.jpg"
                    alt="Croatian kitten eating fish"
                    className="gallery-image" />
                <div className="figcaption">Croatian kitten eating fish</div>
            </div>
            <div className="gallery-link">
                <StaticImage src="../images/artwork/海鲜拼盘.jpg"
                    alt="Seafood Platter"
                    className="gallery-image" />
                <div className="figcaption">Seafood Platter</div>
            </div>
            <div className="gallery-link">
                <StaticImage src="../images/artwork/queensGambit.jpeg"
                    alt="The Queen's Gambit"
                    className="gallery-image" />
                <div className="figcaption">The Queen's Gambit</div>
            </div>
            <div className="gallery-link">
                <StaticImage src="../images/artwork/jellycatBear.jpeg"
                    alt="Jellycat Bear"
                    className="gallery-image" />
                <div className="figcaption">Jellycat Bear</div>
            </div>
        </div>
    )
}