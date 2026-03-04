import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css"

export default function GalleryColumn1() {
    return (
        <div className="gallery-column">
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/珠海女士头像.JPG"}
                    alt="Portrait of a lady in Zhuhai"
                    className="gallery-image" />
                <div className="figcaption">Portrait of a lady in Zhuhai</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/你已经做得很棒了.PNG"}
                    alt="You have done a great job (My original character - miaonai)"
                    className="gallery-image" />
                <div className="figcaption">You have done a great job (My original character - miaonai)</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/londonzoo.png"}
                    alt="London Zoo with my friends"
                    className="gallery-image" />
                <div className="figcaption">London Zoo with my friends</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"../images/artwork/办公的鼠兔.PNG"}
                    alt="Office Pika"
                    className="gallery-image" />
                <div className="figcaption">Office Pika</div>
            </div>
        </div>
    )
}