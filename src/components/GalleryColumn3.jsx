import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css"

export default function GalleryColumn3() {
    return (
        <div class="gallery-column">
            <StaticImage src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/src/images/六本木.jpg"}
                alt="Portrait by Jessica Felicio"
                class="gallery-image" />
            <StaticImage src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/src/images/coolGirl.jpeg"}
                alt="Portrait by Jessica Felicio"
                class="gallery-image" />
            <StaticImage src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/src/images/gufeng.jpeg"}
                alt="Portrait by Jessica Felicio"
                class="gallery-image" />
            <StaticImage src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/src/images/me.jpeg"}
                alt="Portrait by Jessica Felicio"
                class="gallery-image" />
        </div>
    )
}