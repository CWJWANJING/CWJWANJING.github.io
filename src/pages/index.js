import * as React from "react"
import Navigation from "../components/Navigation"
import Me from "../components/Me"

export default function home() {
  const style = {textAlign: "center"}
  return (
    <>
    <Navigation />
    <div>
      <h1 style={style}>Wanjing Chen</h1>
      <Me/>
      <p>Hi</p>
    </div>
    </>
  )
}