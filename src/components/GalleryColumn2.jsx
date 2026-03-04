import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css"

export default function GalleryColumn2() {
    return (
        <div className="gallery-column">
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/维纳斯的诞生.jpg"}
                    alt="The Birth of Venus in my art style"
                    className="gallery-image" />
                <div className="figcaption">The Birth of Venus in my art style</div>
            </div>
            <div className="gallery-link">
                <StaticImage src="../images/artwork/希腊圣殿下的小猫咪.jpg"
                    alt="Greek temple kitten"
                    className="gallery-image" />
                <div className="figcaption">Greek temple kitten</div>
            </div>
            <div className="gallery-link">
                <StaticImage src="../images/artwork/克罗地亚的城墙.jpg"
                    alt="Old city wall in Croatia"
                    className="gallery-image" />
                <div className="figcaption">Old city wall in Croatia</div>
            </div>
            <div className="gallery-link">
                <StaticImage src="../images/artwork/waterstonecafe1.jpeg"
                    alt="waterstone cafe painting"
                    className="gallery-image" />
                <div className="figcaption">Waterstone cafe</div>
            </div>
        </div>
    )
}