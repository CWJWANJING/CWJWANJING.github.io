import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/global.css"

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColour: "#4881ea"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Wanjing Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/art">Art</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;