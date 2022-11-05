import * as React from "react"
import Navigation from "../components/Navigation"
import Me from "../components/Me"

export default function home() {
  return (
    <>
    <Navigation />
    <main>
      <h1>Wanjing Chen</h1>
      <Me/>
      <p>Hi</p>
    </main>
    </>
  )
}