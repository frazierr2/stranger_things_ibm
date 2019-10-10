import React from "react";
import Nav from "react-bootstrap/Nav";

const navStyle = {
  color: "#bdbdbd"
};

const Navbar = () => {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link style={navStyle} href="#inspiration-container">
          Inspiration
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={navStyle} href="#gallery-container" eventKey="link-1">
          Gallery
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={navStyle} href="#episodes-container" eventKey="link-2">
          Episodes
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
