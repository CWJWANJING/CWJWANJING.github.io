import * as React from "react"
import Navigation from "../components/Navigation"
import MoreProjects from "../components/MoreProjects"

export default function projects() {
  return (
    <div>
      <Navigation />
      <div style={{ marginLeft: "2%", marginRight: "2%" }}>
        <h1 style={{ textAlign: "center" }}>My Projects</h1>
        <MoreProjects />
      </div>
    </div>
  )
}