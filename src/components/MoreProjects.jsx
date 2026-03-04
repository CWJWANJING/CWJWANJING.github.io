import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { graphql, useStaticQuery } from 'gatsby';

const MoreProjects = () => {
  const data = useStaticQuery(
    graphql`
        query ProjectsQuery {
            allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/.*content/projects.*/"}, frontmatter: {name: {}}}
                sort: { frontmatter: { date: DESC } }
              ) {
                nodes {
                  html
                  frontmatter {
                    link_href
                    link_text
                    name
                    date
                    image {
                      childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED, width: 800)
                      }
                    }
                  }
                }
              }
            }
        `
  );

  const renderedProjects = data.allMarkdownRemark.nodes.map((project, idx) => {
    const fm = project.frontmatter || {};
    const imgData = fm.image && fm.image.childImageSharp && fm.image.childImageSharp.gatsbyImageData;
    const isStringImage = fm.image && typeof fm.image === 'string';

    return (
      <div className="col-lg-5 card project" key={fm.name || idx}>
        <h2>{fm.name}</h2>
        {imgData && (
          <GatsbyImage className="card-img-top" image={imgData} alt={fm.name} />
        )}
        {isStringImage && (
          <img className="card-img-top" src={fm.image} alt={fm.name} />
        )}
        <div dangerouslySetInnerHTML={{ __html: project.html }}></div>
        {fm.link_href && (
          <a className="btn btn-primary mt-auto" href={fm.link_href}>{fm.link_text || 'Learn more'}</a>
        )}
      </div>
    );
  });
  return (
    <div style={{ marginLeft: "2%", marginRight: "2%" }}>
      <div className="row">
        {renderedProjects}
      </div>
    </div>
  )
}

export default MoreProjects;