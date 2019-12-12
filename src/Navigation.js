import React, {useState} from 'react';
import {NavLink as RouterLink, withRouter} from 'react-router-dom';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';

import logo from './images/logo.jpg';

const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const pathname = props.location.pathname;

  return (
    <Navbar className="Navigation"
            color="dark"
            dark
            expand="md"
            fixed="top">
      <NavbarBrand href="/"><img src={logo} alt={'logo'}/></NavbarBrand>
      <NavbarToggler onClick={toggle}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink tag={RouterLink} to={'/'} exact active={pathname === '/'}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterLink} to={'/about-us'} active={pathname === '/about-us'}>About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterLink} to={'/menu'} active={pathname === '/menu'}>Menu</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterLink} to={'/products'} active={pathname === '/products'}>Products</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterLink} to={'/pictures'} active={pathname === '/pictures'}>Pictures</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterLink} to={'/contact'} active={pathname === '/contact'}>Contact Us</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default withRouter(Navigation);