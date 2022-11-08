import React from 'react';
import "../styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Artwork = () => {
    return (
        <div className="container">
                <h2 className="text-center">Artwork</h2>
                <div style={{textAlign: 'right', paddingBottom: '2%'}}>
                    <a className="text-right" href="/art">More artwork</a>
                </div>
                <div className="row">
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
    )}

export default Artwork;