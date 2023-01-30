import Footer from "../gatsby-theme-blog/components/home-footer"
import * as React from "react"

export default function WebFooter() {
    const socialLinks = [
        {
            name: `instagram`,
            url: `https://www.instagram.com/wanjingchen_/`,
        },
        {
            name: `github`,
            url: `https://github.com/CWJWANJING`,
        },
    ]
    return (
        <Footer socialLinks={socialLinks} />
    )
}