import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { graphql, useStaticQuery } from 'gatsby';

const projects = [
    {
        name: "Project Name Generator",
        image: "projects/projectNameGnerator.png",
        description: (
            <p>
                This project is about creating a single webpage using React and OpenAI
                that generates a bunch of project names based on given keywords input.
                The demonstration of the app can be found <a href="https://youtu.be/1aQnDuiXf_4">here</a>.
                Technologies used: Next.js, Cypress, GPT-3.
            </p>
        ),
        link: {
            href: "https://github.com/CWJWANJING/project-name-generator",
            text: "GitHub Link"
        }
    },
    {
        name: "Mukulele",
        image: "projects/Mukulele.jpg",
        description: (
            <p>
                Mukulele is a gamified ukulele learning app that aims to motivate users to keep learning ukulele.
                The main feature, gamified song challenge,
                was achieved by embedding the developed Unity visualisation into the Android app.
                Two runs of user evaluation were conducted to increase the usability of the app.
                The demonstration of the app can be found <a href="https://youtu.be/APM2M3K48fY">here</a>.
                Technologies used: Android Studio, Unity, C#
            </p>
        ),
        link: {
            href: "https://github.com/CWJWANJING/Mukulele",
            text: "GitHub Link"
        }
    },
    {
        name: "Above The Ashes",
        image: "projects/aboveTheAshesPicture.jpg",
        description: (
            <p>
                Above The Ashes is a Unity 3D adventure shooting game.
                In a group of 3, I worked on one of the game level,
                some interactive elements of the game and implementation & design of menu.
                The demonstration of the game can be found <a href="https://www.youtube.com/watch?v=SqT9jGA4_E8">here</a>.
                Technologies used: Unity, C#
            </p>
        ),
        link: {
            href: "https://github.com/CWJWANJING/Above-The-Ashes",
            text: "GitHub Link"
        }
    },
    {
        name: "Audio Identification",
        image: "projects/shazambrand.jpeg",
        description: (
            <p>
                This is an audio identification project done during a music recognision assignment for a music informatics course.
                It applies the basic principles of Shazam.
                Technologies used: Python
            </p>
        ),
        link: {
            href: "https://github.com/CWJWANJING/Audio-Identification",
            text: "GitHub Link"
        }
    },
    {
        name: "Approximate Consistent Query Answering Implementation",
        image: "projects/database.png",
        description: (
            <p>
                Completed implementing an <a href="https://dl.acm.org/doi/10.1145/3294052.3319703">algorithm </a>
                to answer queries on inconsistent databases.
                Optimised the implementation speed and evaluated the algorithm using quantitative approaches. 
                Technologies used: Python, PostgreSQL
            </p>
        ),
        link: {
            href: "https://github.com/CWJWANJING/Ug_honour_project",
            text: "GitHub Link"
        }
    },
    {
        name: "Deeper Blue",
        image: "projects/deeperblueleaflet.png",
        description: (
            <p>
                Deeper Blue was an assistive chess robot enabling disabled players to
                compete in tournaments. It helps to pick up the chess pieces to the given
                location through web-app. In a group of 9, I helped design the body of the
                robot using LEGO, built the connection between the robot and computer and
                worked on the web-app. Technologies used: EV3, python, JavaScript,
                TCP socket.
            </p>
        ),
        link: {
            href: "https://github.com/deeper-blue/sdp-robot",
            text: "GitHub Link"
        }
    }
]

const MoreProjects = () => {
    const data = useStaticQuery(
        graphql`
            query ProjectsQuery {
                allFile(
                filter: {sourceInstanceName: {eq: "content/assets"}, relativePath: {glob: "projects/*"}}
                ) {
                nodes {
                    sourceInstanceName
                    relativePath
                    childImageSharp {
                    gatsbyImageData
                    }
                }
                }
            }
        `
    );

    let imageMap = {};
    data.allFile.nodes.map((node) => {
        imageMap[node.relativePath] = node;
    });

    const renderedProjects = projects.map((project) => 
        <div className="col-lg-5 card project">
            <h2>{project.name}</h2>
            <GatsbyImage className="card-img-top" image={imageMap[project.image].childImageSharp.gatsbyImageData} alt={project.name} />
            {project.description}
            <a className="btn btn-primary mt-auto" href={project.link.href}>{project.link.text}</a>
        </div>
    )
    return (
        <div style={{ marginLeft: "2%", marginRight: "2%" }}>
            <div className="row">
                {renderedProjects}
            </div>
        </div>
    )
}

export default MoreProjects;