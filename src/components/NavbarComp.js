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
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarComp() {
  return (
    <Navbar
      style={{ backgroundColor: "#ff4654" }}
      className="sticky-top"
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to={"/"}
          className="me-5"
          style={{ color: "#ffab2f" }}
        >
          <h1>Morocco</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#c00817", border: "none", outline: "none" }}
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/"}>
              <h5>Home</h5>
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/HistoryAndGeography"}>
              <h5>History & Geography</h5>
            </Nav.Link>
            <div style={{ position: "relative" }}>
              <div className="artAndCulture">
                {" "}
                <NavDropdown
                  style={{ fontSize: "19px" }}
                  title="Art & Culture"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item
                    as={NavLink}
                    to={"/moroccanTraditionalCraft"}
                  >
                    Moroccan Traditional Craft
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to={"/gastronomy"}>
                    Gastronomy
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to={"/localproducts"}>
                    Local Products
                  </NavDropdown.Item>

                  <NavDropdown.Item as={NavLink} to={"/lifestyle"}>
                    Lifestyle
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to={"/moroccanHospitality"}>
                    Moroccan Hospitality
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <NavDropdown
                style={{ fontSize: "19px" }}
                title="Contemporary Morocco"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={NavLink} to={"/international brands"}>
                  Global Fashion Brands
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to={"/culture cinema"}>
                  Cinematic Culture
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to={"/modernization"}>
                  Modernization in Morocco
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <Nav.Link as={NavLink} to={"/Contact"}>
              <h5>Contact</h5>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
