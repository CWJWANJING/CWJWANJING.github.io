import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css"

export default function GalleryColumn3() {
    return (
        <div class="gallery-column">
            <div className="gallery-link">
                <StaticImage src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/src/images/六本木.jpg"}
                    alt="Roppongi Japan"
                    class="gallery-image" />
                <div className="figcaption">Roppongi Japan</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/src/images/coolGirl.jpeg"}
                    alt="A cool girl"
                    class="gallery-image" />
                <div className="figcaption">A cool girl</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/src/images/gufeng.jpeg"}
                    alt="Ancient Chinese girl"
                    class="gallery-image" />
                <div className="figcaption">Ancient Chinese girl</div>
            </div>
            <div className="gallery-link">
                <StaticImage src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/src/images/me.jpeg"}
                    alt="Portrait"
                    class="gallery-image" />
                <div className="figcaption">Portrait</div>
            </div>
        </div>
    )
}