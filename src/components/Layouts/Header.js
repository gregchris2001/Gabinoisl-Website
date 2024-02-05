import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Gabinoisl from "../../images/gabinoisl-logo.png";

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container style={{ maxWidth: "100%" }}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="#home" style={{ width: "12rem" }}>
            <img
              src={Gabinoisl}
              className="d-inline-block align-top"
              alt="Gabinoisl logo"
              style={{ width: "100%" }}
            />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto"
              style={{ width: "100%", justifyContent: "space-evenly" }}
            >
              <NavLink to="/shop/chandeliers" exact className="nav-link">
                Chandeliers
              </NavLink>

              <NavLink to="/shop/pendant lights" exact className="nav-link">
                Pendant Lights
              </NavLink>

              <NavLink
                to="/shop/dining room chandeliers"
                exact
                className="nav-link"
              >
                Dining Room Chandeliers
              </NavLink>

              <NavLink to="/shop/foyer chandeliers" exact className="nav-link">
                Foyer Chandeliers
              </NavLink>

              <NavLink to="/shop/ceiling fans" exact className="nav-link">
                Ceiling Fans
              </NavLink>

              <NavLink to="/shop/lamps" exact className="nav-link">
                Lamps
              </NavLink>

              <NavLink to="/shop/best sellers" exact className="nav-link">
                Best Sellers
              </NavLink>

              <NavLink to="/shop/new arrival" exact className="nav-link">
                New Arrival
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <Nav style={{ flexDirection: "row", gap: "1rem" }}>
            <NavLink to="/search" exact className="nav-link">
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </NavLink>
            <NavLink to="/cart" exact className="nav-link">
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
