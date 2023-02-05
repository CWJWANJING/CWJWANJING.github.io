import Footer from "../gatsby-theme-blog/components/home-footer"
import * as React from "react"

export default function WebFooter() {
    const socialLinks = [
        {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/wanjingchen/`,
          },
          {
            name: `Github`,
            url: `https://github.com/CWJWANJING`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/wanjingchen_/`,
          },
    ]
    return (
        <Footer socialLinks={socialLinks} />
    )
}