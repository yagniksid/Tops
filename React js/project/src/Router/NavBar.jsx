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
import "./index.css"
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
                        <NavItem> <NavLink to={""}>Home</NavLink></NavItem>
                        <NavItem> <NavLink to={"/service2"}>Service</NavLink></NavItem>
                        <NavItem><NavLink to={"/contact2"}>Contact us</NavLink></NavItem>
                        <NavItem><NavLink to={"/product2"}>Product</NavLink></NavItem>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

