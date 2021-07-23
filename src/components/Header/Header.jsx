import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="container">
      <div className="header-logo">
        <img src={Logo} alt="" />
        <Link to="/login">
          <button className="btn btn-danger">Conectare</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
