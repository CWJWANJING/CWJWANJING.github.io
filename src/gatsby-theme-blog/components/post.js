import * as React from "react"
import { getSrc } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "gatsby-theme-blog/src/components/seo"
import Layout from "gatsby-theme-blog/src/components/layout"
import PostTitle from "gatsby-theme-blog/src/components/post-title"
import PostDate from "gatsby-theme-blog/src/components/post-date"
import PostFooter from "gatsby-theme-blog/src/components/post-footer"
import PostHero from "gatsby-theme-blog/src/components/post-hero"
import Navigation from "../../components/Navigation"

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <>
    <Navigation />
    <Layout location={location} title={title}>
      <Seo
        title={post.title}
        description={post.excerpt}
        imageSource={
          post.socialImage ? getSrc(post.socialImage) : getSrc(post.image)
        }
        imageAlt={post.imageAlt}
      />
      <main>
        <article>
          <header>
            <PostHero post={post} />
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{post.date}</PostDate>
          </header>
          <section>
            <MDXRenderer>{post.body}</MDXRenderer>
          </section>
        </article>
      </main>
      <PostFooter {...{ previous, next }} />
    </Layout>
  </>
)

export default Post