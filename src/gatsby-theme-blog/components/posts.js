import * as React from "react"
import Layout from "gatsby-theme-blog/src/components/layout"
import Footer from "gatsby-theme-blog/src/components/home-footer"
import PostList from "gatsby-theme-blog/src/components/post-list"
import Navigation from "../../components/navbar"

const NewPosts = ({ location, posts, siteTitle, socialLinks }) => (
    <>
    <Navigation/>
    <Layout location={location} title={siteTitle}>
      <h1>My Blogs</h1>
      <main>
        <PostList posts={posts} />
      </main>
      <Footer socialLinks={socialLinks} />
    </Layout>
    </>
)

export default NewPosts
