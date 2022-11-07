import * as React from "react"
import Navigation from "../components/Navigation"
import Me from "../components/Me"
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
      
      <div class="container">
        <h2 class="text-center">Projects</h2>
        <div class="row">
          <div class="col-lg-4 card">
            <img class="card-img-top" src="..." alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="col-lg-4 card">
            <img class="card-img-top" src="..." alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="col-lg-4 card">
            <img class="card-img-top" src="..." alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}