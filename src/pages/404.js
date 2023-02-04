import * as React from "react"
import Navigation from "../components/Navigation"
import "../styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"
import WebFooter from "../components/WebFooter"

export default function home() {
  const style = {
    textAlign: "center"
  }
  return (
    <>
      <Navigation />
      <h1 className="pageTitle" style={style}>404 The information you want cannot be found</h1>
      <WebFooter />
    </>
  )
}