import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function Header() {
  return (
    <header style={headerStyle}>
      <h1> Todo List</h1>
      <Link style={linkStyle} to="/" className="header-link">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about" className="header-link">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#222",
  color: "#fff",
  padding: "10px",
  fontSize: "40px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

export default Header;
