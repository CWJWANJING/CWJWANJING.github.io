import React from 'react';
import { Link } from 'gatsby';
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { Nav, Navbar } from 'react-bootstrap';
// import cv from '../../static/cv.pdf'
import { StaticImage } from 'gatsby-plugin-image';

const navItems = [
  { text: "Home", link: "/" },
  { text: "Art", link: "/art" },
  { text: "Web Comics", link: "/webcomics" },
  { text: "Blogs", link: "/blog" },
  { text: "Projects", link: "/projects" },
  { text: "Shop The Merch", link: "https://miaonaidoodles.printify.me/", external: true },
]

const Navigation = () => {
  const [showSupportPanel, setShowSupportPanel] = React.useState(false)

  const renderedNavItems = navItems.map((navItem) =>
    <Nav.Item className='nav-link' key={navItem.text}>
      {navItem.external ? (
        <Nav.Link
          eventKey={navItem.text}
          href={navItem.link}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta-link"
        >
          {navItem.text}
        </Nav.Link>
      ) : (
        <Nav.Link eventKey={navItem.text} as={Link} to={navItem.link}>
          {navItem.text}
        </Nav.Link>
      )}
    </Nav.Item>
  );

  const openSupportPanel = () => {
    setShowSupportPanel(true)
  }

  const closeSupportPanel = () => {
    setShowSupportPanel(false)
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <div className='noPaddingsLeft'>
          <Link to="/">
            <StaticImage
              src={"../images/logo.png"}
              className="logo"
              alt="my logo"
              placeholder="blurred"
              layout="constrained"
            />
          </Link>
          <Link to="/" id="navbar-name">Wanjing</Link>
        </div>

        <Navbar.Toggle className='navbar-dark' />
        <Navbar.Collapse>
          <Nav className="ms-auto navbar-nav">
            {renderedNavItems}
            <Nav.Item className='nav-link'>
              <Nav.Link
                className="nav-cta-link"
                onClick={openSupportPanel}
                href="#"
              >
                Fuel My Creativity
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {showSupportPanel && (
        <div className="support-panel">
          <div className="support-panel-header">
            <span></span>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={closeSupportPanel}
            >
              Close
            </button>
          </div>
          <iframe
            id="kofiframe"
            src="https://ko-fi.com/miaonaidoodles/?hidefeed=true&widget=true&embed=true&preview=true"
            style={{ border: 'none', width: '100%', padding: '4px', background: '#f9f9f9' }}
            height="712"
            title="miaonaidoodles"
          />
        </div>
      )}
    </>
  );
};

export default Navigation;