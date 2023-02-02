import React from 'react';
import "../styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { StaticImage } from "gatsby-plugin-image";

const HomeBlogs = () => {
    return (
        <div className="container">
            <h2 className="text-center">Blogs</h2>
            <div style={{ textAlign: 'right', paddingBottom: '2%' }}>
                <a className="text-right" href="/blog">More blogs</a>
            </div>
            <div className="row">
                <div className="col-lg-4 card">
                    <StaticImage className="card-img-top" src={"../images/homeBlogs/CNY.jpeg"} alt="Card image cap" />
                    <div className="card-body d-flex">
                        <h5 className="card-title">How my family celebrates Chinese New Year</h5>
                        <p className="card-text">Chinese New Year 2023 fell on Sunday 22 January, festivities will continue for around 16 days, and end with the Lantern Festival on 5 February.
                            This time marks the transition between two zodiac signs,
                            2022 was the Year of the Tiger, and 2023 is the Year of the Rabbit.
                            As a Chinese person, I’d like to share with you how my family usually celebrates Chinese New Year.</p>
                        <a href="/blog/cny/" className="btn btn-primary stretched-link mt-auto">Read</a>
                    </div>
                </div>
                <div className="col-lg-4 card">
                    <StaticImage className="card-img-top" src={"../images/homeBlogs/HEL-PVGplane.jpeg"} alt="Helsinki plane screen" />
                    <div className="card-body d-flex">
                        <h5 className="card-title">How I travelled from the UK to China during the pandemic</h5>
                        <p className="card-text">Entering China during the pandemic is really hard. I will be sharing with you how I travelled from the UK to China during the pandemic as a Chinese citizen.</p>
                        <a href="/blog/enterChinaduringCOVID/" className="btn btn-primary stretched-link mt-auto">Read</a>
                    </div>
                </div>
                <div className="col-lg-4 card">
                    <StaticImage className="card-img-top" src={"../images/homeBlogs/riegostreet.jpg"} alt="Riego Street Poster" />
                    <div className="card-body d-flex">
                        <h5 className="card-title">An international student in Edinburgh - Part 2</h5>
                        <p className="card-text">I didn’t get my first choice of accommodation at the University of Edinburgh,
                            I ended up in Riego Street, but I had a good experience. Let me tell you more about it!</p>
                        <a href="/blog/Riego-street/" className="btn btn-primary stretched-link mt-auto">Read</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBlogs;