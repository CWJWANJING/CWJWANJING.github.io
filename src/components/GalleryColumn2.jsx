import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css"

export default function GalleryColumn2() {
    return (
        <div class="gallery-column">
            <StaticImage src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/src/images/jealouskitty.jpeg"}
                alt="Portrait by Jessica Felicio"
                class="gallery-image" />
            <StaticImage src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/src/images/back.jpeg"}
                alt="Portrait by Jessica Felicio"
                class="gallery-image" />
            <StaticImage src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/src/images/buddapestHotel2.jpeg"}
                alt="Portrait by Jessica Felicio"
                class="gallery-image" />
        </div>
    )
}