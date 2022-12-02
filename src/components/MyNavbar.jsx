import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
export default function MyNavbar() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand className="pl-2" href="#home">
          Void App
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="px-4" style={{ color: "white" }} href="#home">
            Home
          </Nav.Link>
          <Nav.Link
            className="px-4"
            style={{ color: "white" }}
            href="#features"
          >
            Favourites
          </Nav.Link>
          <Nav.Link className="px-4" style={{ color: "white" }} href="#pricing">
            Subscribe
          </Nav.Link>
        </Nav>
        <Form inline>
          <Nav.Link style={{ color: "white" }} href="#home">
            VoidNine
          </Nav.Link>
        </Form>
      </Navbar>
    </div>
  );
}
