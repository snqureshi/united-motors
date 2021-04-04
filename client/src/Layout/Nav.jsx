import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const authenticatedOptions = (
  <>
    <Nav.Link as={NavLink} to="/user_cars" className="nav-tabs">
      My Cars
    </Nav.Link>
    <Nav.Link as={NavLink} to="/cars/new" className="nav-tabs">
      Add A Car
    </Nav.Link>
    <Nav.Link as={NavLink} to="/logout" className="nav-tabs">
      Log Out
    </Nav.Link>
  </>
);

const unauthenticatedOptions = (
  <>
    <Nav.Link className="nav-tabs" href="/login">
      Sign Up/Sign In
    </Nav.Link>
  </>
);

const alwaysOptions = (
  <>
    <Nav.Link className="nav-tabs" href="/cars">
      Available Cars
    </Nav.Link>
  </>
);

const MainNav = (props) => {
  const { currentUser } = props;
  return (
    <Navbar className="nav-section sticky-top" expand="lg">
      <Navbar.Brand href="/cars" className="page-logo">
        <img
          className="logo-pic"
          src="https://i.imgur.com/SuEWCRc.png?2"
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="font-weight-bold">
          {currentUser && (
            <div className="welcome-msg">Welcome,{currentUser.username}</div>
          )}
          {alwaysOptions}
          {currentUser ? authenticatedOptions : unauthenticatedOptions}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default MainNav;
