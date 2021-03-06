import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <Link className="navbar-brand" to="/">
        <i className="fas fa-utensils"> Restaurant App </i>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link active" to="/">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" to="/orders">
            My Orders
          </NavLink>
          <NavLink className="nav-item nav-link" to="/admin">
            Admin
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
