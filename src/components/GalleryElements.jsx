import * as React from "react"
import "../styles/global.css"
import GalleryColumn1 from "./GalleryColumn1"
import GalleryColumn2 from "./GalleryColumn2"
import GalleryColumn3 from "./GalleryColumn3"
import GalleryColumn4 from "./GalleryColumn4"

export default function GalleryElements() {
    return (
            <div class="gallery">
                <GalleryColumn1 />
                <GalleryColumn2 />
                <GalleryColumn3 />
                <GalleryColumn4 />
            </div>
    )
}