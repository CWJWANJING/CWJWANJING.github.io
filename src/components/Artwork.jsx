import React from 'react';
import "../styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { StaticImage } from "gatsby-plugin-image";

const Artwork = () => {
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
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="col-lg-4 card">
                    <StaticImage className="card-img-top" src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/content/assets/projects/jealouskitty.jpeg"} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Jealous Kitty</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="col-lg-4 card">
                    <StaticImage className="card-img-top" src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/content/assets/projects/六本木.jpg"} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Roppongi (Japan)</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artwork;