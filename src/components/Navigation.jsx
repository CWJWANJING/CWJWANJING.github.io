import React from 'react';
import { Link } from 'gatsby';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

const navItems = [
  { text: "Home", link: "/" },
  { text: "Projects", link: "/projects" },
  { text: "Art", link: "/art" },
  { text: "Blogs", link: "/blog" },
]

const Navigation = () => {
  const renderedNavItems = navItems.map((navItem) =>
    <li className="nav-item" key={navItem.link}>
      <Link className="nav-link" to={navItem.link}>{navItem.text}</Link>
    </li>
  );

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColour: "#4881ea" }}>
      <div className="container-fluid">
        <Link to="/">Wanjing logo XD</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarToggler" aria-controls="navbarToggler" 
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ms-auto">
            {renderedNavItems}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;