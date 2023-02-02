import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { Link } from 'gatsby';

const MoreProjects = () => {
    return (
        <div style={{ marginLeft: "10%", marginRight: "10%" }}>
            <div className="row">
                <div className="col-lg-5 card project">
                    <h2>Project Name Generator</h2>
                    <StaticImage className="card-img-top"
                        src={"../images/projects/projectNameGnerator.png"}
                        alt="Card image cap" />
                    <p>This project is about creating a single webpage using React and OpenAI
                        that generates a bunch of project names based on given keywords input.
                        The demonstration of the app can be found <a href="https://youtu.be/1aQnDuiXf_4">here</a>.
                        Technologies used: Next.js, Cypress, OpenAI.</p>
                    <Link className="btn btn-primary mt-auto" to="https://github.com/CWJWANJING/project-name-generator">Github Link</Link>
                </div>

                <div className="col-lg-5 card project">
                    <h2>Mukulele</h2>
                    <StaticImage className="card-img-top"
                        src={"../images/projects/Mukulele.jpg"}
                        alt="Card image cap" />
                    <p>Mukulele is a gamified ukulele learning app that aims to motivate users to keep learning ukulele.
                        The main feature, gamified song challenge,
                        was achieved by embedding the developed Unity visualisation into the Android app.
                        Two runs of user evaluation were conducted to increase the usability of the app.
                        The demonstration of the app can be found <a href="https://youtu.be/APM2M3K48fY">here</a>.
                        Technologies used: Android Studio, Unity, C#</p>
                    <Link className="btn btn-primary mt-auto"
                        to="https://github.com/CWJWANJING/Mukulele">Github Link</Link>
                </div>
                <div className="col-lg-5 card project">
                    <h2>Above The Ashes</h2>
                    <StaticImage className="card-img-top"
                        src={"../images/projects/aboveTheAshesPicture.jpg"}
                        alt="Card image cap" />
                    <p>Above The Ashes is a Unity 3D adventure shooting game.
                        In a group of 3, I worked on one of the game level,
                        some interactive elements of the game and implementation & design of menu.
                        The demonstration of the game can be found <a href="https://www.youtube.com/watch?v=SqT9jGA4_E8">here</a>.
                        Technologies used: Unity, C#</p>
                    <Link className="btn btn-primary mt-auto"
                        to="https://github.com/CWJWANJING/Above-The-Ashes">Github Link</Link>
                </div>
                <div className="col-lg-5 card project">
                    <h2>Audio Identification</h2>
                    <StaticImage className="card-img-top"
                        src={"../images/projects/shazambrand.jpeg"}
                        alt="Card image cap" />
                    <p>This is an audio identification project done during a music recognision assignment for a music informatics course.
                        It applies the basic principles of Shazam.
                        Technologies used: Python</p>
                    <Link className="btn btn-primary mt-auto"
                        to="https://github.com/CWJWANJING/Audio-Identification">Github Link</Link>
                </div>
                <div className="col-lg-5 card project">
                    <h2>Approximate Consistent Query Answering Implementation</h2>
                    <StaticImage className="card-img-top"
                        src={"../images/projects/database.png"}
                        alt="Card image cap" />
                    <p>Completed implementing an <a href="https://dl.acm.org/doi/10.1145/3294052.3319703">algorithm </a>
                        to answer queries on inconsistent databases.
                        Optimised the implementation speed and evaluated the algorithm using quantitative approaches. Technologies used: Python, PostgreSQL</p>
                    <Link className="btn btn-primary mt-auto"
                        to="https://github.com/CWJWANJING/Ug_honour_project">Github Link</Link>
                </div>
                <div className="col-lg-5 card project">
                    <h2>Deeper Blue</h2>
                    <StaticImage className="card-img-top"
                        src={"../images/projects/deeperblueleaflet.png"}
                        alt="Card image cap" />
                    <p>Deeper Blue was an assistive chess robot enabling disabled players to
                        compete in tournaments. It helps to pick up the chess pieces to the given
                        location through web-app. In a group of 9, I helped design the body of the
                        robot using LEGO, built the connection between the robot and computer and
                        worked on the web-app. Technologies used: EV3, python, JavaScript,
                        TCP socket.</p>
                    <Link className="btn btn-primary mt-auto"
                        to="https://github.com/deeper-blue/sdp-robot">Github Link</Link>
                </div>
            </div>
        </div>
    )
}

export default MoreProjects;