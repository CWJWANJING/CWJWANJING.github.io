import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { graphql, useStaticQuery } from 'gatsby';

const MoreProjects = () => {
    const data = useStaticQuery(
        graphql`
        query ProjectsQuery {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/.*content/projects.*/"}}) {
              nodes {
                html
                frontmatter {
                  link_href
                  link_text
                  name
                  image {
                    childImageSharp {
                        gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        `
    );

    const renderedProjects = data.allMarkdownRemark.nodes.map((project) => 
        <div className="col-lg-5 card project">
            <h2>{project.frontmatter.name}</h2>
            <GatsbyImage className="card-img-top" image={project.frontmatter.image.childImageSharp.gatsbyImageData} alt={project.frontmatter.name} />
            <div dangerouslySetInnerHTML={{__html: project.html}}></div>
            <a className="btn btn-primary mt-auto" href={project.frontmatter.link_href}>{project.frontmatter.link_text}</a>
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