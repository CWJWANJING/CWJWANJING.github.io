import React from 'react';
import "../styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { StaticImage } from "gatsby-plugin-image";

const HomeArtwork = () => {
    return (
        <div className="container">
            <h2 className="text-center">Artwork</h2>
            <div style={{ textAlign: 'right', paddingBottom: '2%' }}>
                <a className="text-right" href="/art">More artwork</a>
            </div>
            <div className="row">
                <div className="col-lg-4 card">
                    <StaticImage className="card-img-top" src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/content/assets/projects/waterstonecafe1.jpeg"} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Waterstone Cafe</h5>
                    </div>
                </div>
                <div className="col-lg-4 card">
                    <StaticImage className="card-img-top" src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/content/assets/projects/jealouskitty.jpeg"} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Jealous Kitty</h5>
                    </div>
                </div>
                <div className="col-lg-4 card">
                    <StaticImage className="card-img-top" src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/content/assets/projects/六本木.jpg"} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Roppongi (Japan)</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeArtwork;