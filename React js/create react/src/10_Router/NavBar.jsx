import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import "./indexx.css"
import { NavLink } from 'react-router-dom';
export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='navdiv' >
      <Navbar expand="lg">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className=" tag me-auto d-flex gap-3" navbar>
            <NavItem> <NavLink to={""} >HOME</NavLink> </NavItem>
            <NavItem> <NavLink to={"/contact"} >CONTACT US</NavLink></NavItem>
            <NavItem><NavLink to={"/service"} >SERVICE</NavLink></NavItem>
            <NavItem><NavLink to={"/product"} >PRODUCT</NavLink></NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

