import React, {useState} from 'react';
import {Link, NavLink as RouterLink, useLocation} from 'react-router-dom';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

import logo from './images/logo.jpg';

const Navigation = () => {
  const pathname = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false);
  };


  return (
    <Navbar className="Navigation"
            variant="dark"
            bg="dark"
            expand="md"
            fixed="top"
            expanded={isOpen}>
      <Navbar.Brand href="/"><img src={logo} alt={'logo'}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleNavBar}/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link to={'/'} exact as={RouterLink} onClick={handleLinkClick}>Home</Nav.Link>
          <Nav.Link to={'/about-us'} as={RouterLink} onClick={handleLinkClick}>About Us</Nav.Link>
          <Nav.Link to={'/menu'} as={RouterLink} onClick={handleLinkClick}>Menu</Nav.Link>
          <NavDropdown title="Products"
                       id="products-nav-dropdown"
                       className={['/foods', '/soaps', '/gift-baskets'].includes(pathname) ? 'active' : ''}>
            <NavDropdown.Item as={Link} to="/foods" onClick={handleLinkClick}>Food</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/soaps" onClick={handleLinkClick}>Soaps</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/gift-baskets" onClick={handleLinkClick}>Gift Baskets</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link to={'/pictures'} as={RouterLink} onClick={handleLinkClick}>Pictures</Nav.Link>
          <Nav.Link to={'/contact'} as={RouterLink} onClick={handleLinkClick}>Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;