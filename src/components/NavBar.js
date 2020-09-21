import React, { useState } from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand">iCrowdTask</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNavAltMarkup"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="navbar-nav">
          <a className="nav-link" href="#">
            How it works
          </a>
          <a className="nav-link" href="#">
            Requesters
          </a>
          <a className="nav-link" href="#">
            Workers
          </a>
          <a className="nav-link" href="#">
            Pricing
          </a>
          <a className="nav-link" href="#">
            About
          </a>
        </div>
      </div>
      <div>
        <button className="btn btn-sm btn-success">Sign in</button>
      </div>
    </nav>
  );
}

export default NavBar;
