import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css"

export default function GalleryColumn1() {
    return (
        <div class="gallery-column">
            <StaticImage src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/src/images/waterstonecafe1.jpeg"}
                alt="Portrait by Jessica Felicio"
                class="gallery-image" />
            <StaticImage src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/src/images/jellycatBear.jpeg"}
                alt="Portrait by Jessica Felicio"
                class="gallery-image" />
            <StaticImage src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/src/images/jellycatPuppy.jpeg"}
                alt="Portrait by Jessica Felicio"
                class="gallery-image" />
            <StaticImage src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/src/images/buddapestHotel.jpeg"}
                alt="Portrait by Jessica Felicio"
                class="gallery-image" />
        </div>
    )
}