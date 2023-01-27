import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css"

export default function GalleryColumn4() {
    return (
        <div class="gallery-column">
            <StaticImage src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/src/images/queensGambit.jpeg"}
                alt="Portrait by Jessica Felicio"
                class="gallery-image" />
            <StaticImage src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/src/images/satyr.jpeg"}
                alt="Portrait by Jessica Felicio"
                class="gallery-image" />
            <StaticImage src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/src/images/jigsawKitty.png"}
                alt="Portrait by Jessica Felicio"
                class="gallery-image" />
            <StaticImage src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/src/images/rapeflowers.png"}
                alt="Portrait by Jessica Felicio"
                class="gallery-image" />
        </div>
    )
}