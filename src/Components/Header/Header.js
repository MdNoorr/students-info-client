import React, { useContext } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "./logo.jpg";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
  const history = useHistory();
  const handleLoginRoute = () => {
    history.push("/login");
  };
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <Navbar bg="" expand="md">
      <div className="container-lg">
        <Link to="/" className="navbar-brand mr-md-5 mr-0">
          <div className="logo">
            <h3 className="text-info">Student Details</h3>
          </div>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-md-center">
            <Link to="/" className="nav-link mr-lg-3 mr-0">
              Home
            </Link>

            <Link to="/addStudent" className="nav-link mr-lg-3 mr-0">
              Add Student
            </Link>

            {loggedInUser.isSignedIn ? (
              <Button
                className="btn btn-warning tg-primary"
                onClick={() => setLoggedInUser({})}
              >
                Sign out
              </Button>
            ) : (
              <Button
                className="btn btn-warning tg-primary"
                onClick={handleLoginRoute}
              >
                Login
              </Button>
            )}

            {loggedInUser.isSignedIn && (
              <div className="user-icon">
                {loggedInUser.name
                  ? loggedInUser.name.split(" ").slice(0, 1)
                  : "User"}
                <i className="fas fa-user"></i>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
