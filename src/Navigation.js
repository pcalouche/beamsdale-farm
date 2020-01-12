import React, {useState} from 'react';
import {Link, NavLink as RouterLink, useLocation} from 'react-router-dom';
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from 'reactstrap';

import logo from './images/logo.jpg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => setIsOpen(!isOpen);

  const linkHandler = () => {
    setIsOpen(false);
  };

  const pathname = useLocation().pathname;

  return (
    <Navbar className="Navigation"
            color="dark"
            dark
            expand="md"
            fixed="top">
      <NavbarBrand href="/"><img src={logo} alt={'logo'}/></NavbarBrand>
      <NavbarToggler onClick={toggleHandler}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink tag={RouterLink} to={'/'} exact onClick={linkHandler}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterLink} to={'/about-us'} onClick={linkHandler}>About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterLink} to={'/menu'} onClick={linkHandler}>Menu</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav
                            className={['/foods', '/soaps', '/gift-baskets'].includes(pathname) ? 'active' : ''}>
              Products
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag={Link} to="/foods" onClick={linkHandler}>
                Foods
              </DropdownItem>
              <DropdownItem tag={Link} to="/soaps" onClick={linkHandler}>
                Soaps
              </DropdownItem>
              <DropdownItem tag={Link} to="/gift-baskets" onClick={linkHandler}>
                Gift Baskets
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink tag={RouterLink} to={'/pictures'} active={pathname === '/pictures'} onClick={linkHandler}>Pictures</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterLink} to={'/contact'} active={pathname === '/contact'} onClick={linkHandler}>Contact Us</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;