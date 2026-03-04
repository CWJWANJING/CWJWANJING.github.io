import React from 'react';
import "../styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { StaticImage } from "gatsby-plugin-image";
import ImageEnlarge from "./ImageEnlarge"

const HomeArtwork = () => {
    return (
        <div className="container">
            <h2 className="text-center">Artwork</h2>
            <div className="homeblogs-more">
                <a className="text-right" href="/art">More artwork</a>
            </div>
            <div className="row">
                <div className="col-lg-4 card">
                    <div className="gallery-link enlargeable">
                        <StaticImage className="gallery-image card-img-top" src="../images/artwork/维纳斯的诞生.jpg" alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">The Birth of Venus in my asrt style</h5>
                    </div>
                </div>
                <div className="col-lg-4 card">
                    <div className="gallery-link enlargeable">
                        <StaticImage className="gallery-image card-img-top" src="../images/artwork/海鲜拼盘.jpg" alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Seafood Platter</h5>
                    </div>
                </div>
                <div className="col-lg-4 card">
                    <div className="gallery-link enlargeable">
                        <StaticImage className="gallery-image card-img-top" src="../images/artwork/你已经做得很棒了.PNG" alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">You have done a great job (My original character - miaonai)</h5>
                    </div>
                </div>
            </div>
            <ImageEnlarge />
        </div>
    )
}

export default HomeArtwork;
