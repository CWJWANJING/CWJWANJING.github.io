import React from "react";
import { graphql, Link } from "gatsby";
import Navigation from "../components/Navigation";
import "../styles/blog-list.css";

export default function Blog({ data }) {
  return (
    <div>
      <Navigation />
      <main className="blog-list-container">
        <h1>My Blogs</h1>
        {data.allMarkdownRemark.nodes.map((post) => (
          <article key={post.id} className="blog-list-item">
            <h2>
              <Link to={post.frontmatter.slug || `/blog/${post.id}`}>
                {post.frontmatter.title}
              </Link>
            </h2>
            <p className="blog-list-date">{post.frontmatter.date}</p>
            <p className="blog-list-excerpt">{post.excerpt}</p>
          </article>
        ))}
      </main>
    </div>
  );
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;