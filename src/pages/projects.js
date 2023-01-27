import * as React from "react"
import Navigation from "../components/Navigation"
import Projects from "../components/Projects"

export default function projects() {
  return (
    <>
      <Navigation />
      <div style={{ marginLeft: "2%", marginRight: "2%", marginBottom: "2%" }}>
        <h1 style={{ textAlign: "center" }}>My Projects</h1>
        <Projects />
      </div>
    </>
  )
}