import * as React from "react"
import Navigation from "../components/Navigation"
import Me from "../components/Me"
import HomeProjects from "../components/HomeProjects"
import HomeBlogs from "../components/HomeBlogs"
import HomeArtwork from "../components/HomeArtwork"
import "../styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default function home() {
  const style = {
    textAlign: "center"
  }
  return (
    <>
      <Navigation />
      <h1 style={style}>Wanjing Chen</h1>
      <Me />
      <HomeBlogs />
      <HomeProjects />
      <HomeArtwork />
    </>
  )
}