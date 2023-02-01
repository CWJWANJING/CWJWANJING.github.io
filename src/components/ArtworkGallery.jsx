import * as React from "react"
import GalleryElements from "./GalleryElements"

export default function ArtworkGallery() {
    return (
        <>
            <div style={{marginLeft: "2%", marginRight: "2%"}}>
                <h1 className="pageTitle" style={{textAlign: "center"}}>My Artwork</h1>
                <GalleryElements/>
            </div>
        </>
    )
}