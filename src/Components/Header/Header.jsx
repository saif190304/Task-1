import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import './Header.css';
import logo from '../../Images/logo.png';
import mail from '../../Images/email.png';
import call from '../../Images/call-i.png';

const Header = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#servicegrid' },
    { name: 'Industry', href: '#industry' },
    { name: 'Career', href: '#career' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavLinkClick = (href) => {
    setActiveLink(href);
    setShowMenu(false); 
  };

  return (
    <header>
      <Navbar
        expand="lg"
        fixed="top"
        className={`custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      >
        <Container>
          <Navbar.Brand href="#home" className="p-0">
            <img src={logo} alt="Logistics Logo" className="navbar-logo" />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={() => setShowMenu(true)}
          />

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            show={showMenu}
            onHide={() => setShowMenu(false)}
            placement="end" 
            className="custom-offcanvas"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <img src={logo} alt="Logo" style={{ height: '40px' }} />
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 nav-links-container">
                {navLinks.map((link) => (
                  <Nav.Link
                    key={link.href}
                    href={link.href}
                    className={activeLink === link.href ? 'active' : ''}
                    onClick={() => handleNavLinkClick(link.href)}
                  >
                    {link.name}
                  </Nav.Link>
                ))}
              </Nav>

              <div className="header-contact-info d-flex flex-column flex-lg-row align-items-lg-center">
                <div className="contact-item">
                  <img src={mail} alt="email" />
                  <span>Info@logistics.com</span>
                </div>
                <div className="contact-item">
                  <img src={call} alt="call" />
                  <span>+91 1234567890</span>
                </div>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;