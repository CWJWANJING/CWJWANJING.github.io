const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

// 1️⃣ Add slug to each MarkdownRemark node
exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === "MarkdownRemark") {
        const slug = node.frontmatter.slug
            ? node.frontmatter.slug.startsWith("/")
                ? node.frontmatter.slug
                : `/${node.frontmatter.slug}/`
            : createFilePath({ node, getNode, basePath: "content/blog" });

        createNodeField({
            node,
            name: "slug",
            value: slug,
        });
    }
};

// 2️⃣ Create pages for each Markdown post
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve("./src/templates/blog-post.jsx");

    const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);

    if (result.errors) {
        reporter.panic("Error loading Markdown posts", result.errors);
    }

    const posts = result.data.allMarkdownRemark.nodes;

    posts.forEach((post) => {
        createPage({
            path: post.fields.slug, // <-- use the slug created in onCreateNode
            component: blogTemplate,
            context: { id: post.id }, // <-- used in template query
        });
    });
};