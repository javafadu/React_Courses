import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  InputGroup,
  Input,
  Button,
} from "reactstrap";

import {RiSearchLine} from "react-icons/ri";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="sm" color="info">
      <NavbarBrand href="/">Techno Shop</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mx-auto" navbar>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Products</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact Us</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>
          <InputGroup>
            <Input />
            <Button><RiSearchLine/></Button>
          </InputGroup>
        </NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default Header;