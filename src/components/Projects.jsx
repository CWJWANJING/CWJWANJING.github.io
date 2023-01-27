import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

export default function Projects() {
    return (
        <>
            <div style={{ marginLeft: "10%", marginRight: "10%" }}>
                <h2>Project Name Generator</h2>
                <StaticImage className="card-img-top"
                    src={"/Users/wanjing/Desktop/interests/Side_projects/my-themed-blog/content/assets/projects/website-UI.jpg"}
                    alt="Card image cap" />
                <p>This project is about creating a single webpage using React and OpenAI
                    that generates a bunch of project names based on given keywords input.
                    The demonstration of the app can be found <a href="https://youtu.be/1aQnDuiXf_4">here</a>.
                    Technologies used: Next.js, Cypress, OpenAI.</p>
            </div>
        </>
    )
}