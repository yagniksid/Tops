import React, { useState } from 'react';
import logoImage from "../../Image/logo.svg";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div style={{maxWidth:"100vw"}} >
            <h1>Hello</h1>
            <Navbar expand="lg" className='w-100' >
                <NavbarBrand >
                    <img src={logoImage} alt="" style={{height:"50px"}} />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                {/* <Collapse isOpen={isOpen} navbar> */}
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            GitHub
                        </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Options
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>Option 1</DropdownItem>
                            <DropdownItem>Option 2</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Reset</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
                {/* </Collapse>  */}
            </Navbar>
        </div>
    );
}

