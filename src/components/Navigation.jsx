import React from 'react';
import { Link } from 'gatsby';
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { Nav, Navbar } from 'react-bootstrap';
import cv from '../../static/cv.pdf'
import { StaticImage } from 'gatsby-plugin-image';

const navItems = [
  { text: "Home", link: "/" },
  { text: "Projects", link: "/projects" },
  { text: "Art", link: "/art" },
  { text: "Blogs", link: "/blog" },
]

const Navigation = () => {
  const renderedNavItems = navItems.map((navItem) =>
    <Nav.Item className='nav-link'>
      <Nav.Link eventKey={navItem.text} as={Link} to={navItem.link}>
        {navItem.text}
      </Nav.Link>
    </Nav.Item>
  );

  return (
    <Navbar collapseOnSelect expand="lg">
      <p className='noPaddings'>
      <Link className="logoNnameLink" to="/">
        <StaticImage
          src={"../images/logo.png"}
          className="logo"
          alt="my logo"
          placeholder="blurred"
          layout="constrained"
        />
      </Link>
      <Link className="logoNnameLink" id="navbar-name" to="/">Wanjing</Link>
      </p>

      <Navbar.Toggle className='navbar-dark' />
      <Navbar.Collapse>
        <Nav className="ms-auto navbar-nav">
          {renderedNavItems}
          <Nav.Item className="nav-link">
            <a className="nav-link" href={cv}>
              CV
            </a>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;