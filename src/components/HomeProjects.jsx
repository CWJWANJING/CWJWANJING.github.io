import React from 'react';
import "../styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { StaticImage } from "gatsby-plugin-image";

const Projects = () => {
    return (
        <div className="container">
                <h2 className="text-center">Projects</h2>
                <div style={{textAlign: 'right', paddingBottom: '2%'}}>
                    <a className="text-right" href="/projects">More projects</a>
                </div>
                <div className="row">
                <div className="col-lg-4 card">
                    <StaticImage className="card-img-top" 
                        src={"../images/homeProjects/projectNameGnerator.png"} 
                        alt="Card image cap" />
                    <div className="card-body d-flex">
                    <h5 className="card-title">Project Name Generator</h5>
                    <p className="card-text">This project is about creating a single webpage using React and OpenAI 
                        that generates a bunch of project names based on given keywords input.</p>
                    <a href="https://github.com/CWJWANJING/project-name-generator" className="btn btn-primary stretched-link mt-auto">Github Page</a>
                    </div>
                </div>
                <div className="col-lg-4 card">
                    <StaticImage className="card-img-top" 
                        src={"../images/homeProjects/Mukulele.jpg"} 
                        alt="Card image cap" />
                    <div className="card-body d-flex">
                    <h5 className="card-title">Mukulele</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a href="https://github.com/CWJWANJING/Mukulele" className="btn btn-primary stretched-link mt-auto">Github Page</a>
                    </div>
                </div>
                <div className="col-lg-4 card">
                    <StaticImage className="card-img-top" 
                        src={"../images/homeProjects/aboveTheAshesPicture.jpg"} 
                        alt="Card image cap" />
                    <div className="card-body d-flex">
                    <h5 className="card-title">Above The Ashes</h5>
                    <p className="card-text">Above The Ashes is a Unity 3D adventure shooting game. 
                        In a group of 3, I worked on one of the game level, some interactive elements of the game and implementation & design of menu.</p>
                    <a href="https://github.com/CWJWANJING/Above-The-Ashes" className="btn btn-primary stretched-link mt-auto">Github Page</a>
                    </div>
                </div>
                </div>
            </div>
    )}

export default Projects;