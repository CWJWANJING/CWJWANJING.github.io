import * as React from "react"
import Navigation from "../components/Navigation"
import Me from "../components/Me"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Styled from "@emotion/styled"
import "../styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"

const P = Styled.p`
  margin: 2% 0%;
  font-size: 1.4rem;
  text-align: center;
  }
`

export default function home() {
  const style = {
    textAlign: "center",
    padding: "2% 0%",
  }
  return (
    <>
      <Navigation />
      <h1 style={style}>Wanjing Chen</h1>
      <Me />
      <P>Hi! My name is Wanjing. I'm a software developer who draws. Nice to meet you! 😊</P>
      <Blogs />
      <Projects />
    </>
  )
}