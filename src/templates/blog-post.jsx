import * as React from "react"
import { graphql } from "gatsby"
import Navigation from "../components/Navigation"
import "../styles/blog-post.css" // add CSS for styling

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <div>
      <Navigation />
      <main className="blog-post-container">
        <h1 className="blog-post-title">{post.frontmatter.title}</h1>
        <p className="blog-post-date">{post.frontmatter.date}</p>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </main>
    </div>
  )
}

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`