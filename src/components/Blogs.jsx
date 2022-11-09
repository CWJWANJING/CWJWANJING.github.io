import React from 'react';
import "../styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { StaticImage } from "gatsby-plugin-image";

const Blogs = () => {
    return (
        <div className="container">
            <h2 className="text-center">Blogs</h2>
            <div style={{ textAlign: 'right', paddingBottom: '2%' }}>
                <a className="text-right" href="/blog">More blogs</a>
            </div>
            <div className="row">
                <div className="col-lg-4 card">
                    <StaticImage className="card-img-top" src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/content/assets/uktochina/HEL-PVGplane.jpeg"} alt="Helsinki plane screen" />
                    <div className="card-body">
                        <h5 className="card-title">How I travelled from the UK to China during the pandemic</h5>
                        <p className="card-text">Entering China during the pandemic is really hard. I will be sharing with you how I travelled from the UK to China during the pandemic as a Chinese citizen.</p>
                        <a href="/blog/enterChinaduringCOVID/" class="btn btn-primary stretched-link">Read</a>
                    </div>
                </div>
                <div className="col-lg-4 card">
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="col-lg-4 card">
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs;