import React from "react";
import "./NavbarComp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import {
  faBars,
  faCogs,
  faList,
  faTh,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComp() {
  return (
    <Navbar
      style={{ backgroundColor: "#e70014" }}
      className="sticky-top"
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to={"/"}
          className="me-5"
          style={{ color: "#006230" }}
        >
          <h1>Morocco</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#006230", border: "none", outline: "none" }}
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/"}>
              <h5>Home</h5>
            </Nav.Link>
            <Nav.Link as={NavLink} to={"HistoryAndGeography"}>
              <h5>History & Geography</h5>
            </Nav.Link>
            <Nav.Link as={NavLink} to={"ArtAndCulture"}>
              <h5>Art & Culture</h5>
            </Nav.Link>
            <Nav.Link as={NavLink} to={"Gastronomy"}>
              <h5>Gastronomy</h5>
            </Nav.Link>

            <Nav.Link as={NavLink} to={"Contemporary"}>
              <h5>Contemporary</h5>
            </Nav.Link>
            <Nav.Link as={NavLink} to={"Contact"}>
              <h5>Contact</h5>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
