import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import React from "react";
import { Box } from "@mui/system";
import { DropDownUser } from "./DropDownUser";

export const NavbarHeader = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link href="/sign-in">Sign In</Nav.Link>
          <Nav.Link href="/sign-up">Sign Up</Nav.Link>
        </Navbar.Collapse>
        <Box>
          <DropDownUser />
        </Box>
      </Container>
    </Navbar>
  );
};
