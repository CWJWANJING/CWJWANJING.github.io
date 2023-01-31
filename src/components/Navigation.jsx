import React from 'react';
import { Link } from 'gatsby';
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { Nav, Navbar } from 'react-bootstrap';

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
      <h3>Wanjing</h3>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ms-auto navbar-nav">
          {renderedNavItems}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;