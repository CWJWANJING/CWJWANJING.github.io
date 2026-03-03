import React from "react";
import { graphql, Link } from "gatsby";

export default function Blog({ data }) {
    return (
        <main>
            <h1>Blog</h1>
            <ul>
                {data.allMarkdownRemark.nodes.map((post) => (
                    <li key={post.id}>
                        <Link to={post.frontmatter.slug || `/blog/${post.id}`}>
                            {post.frontmatter.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          slug
        }
      }
    }
  }
`;