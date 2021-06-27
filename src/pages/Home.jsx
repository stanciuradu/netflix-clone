import React from "react";
import Logo from "../assets/images/logo.png";
import "../pages/Home.css";
import { Link } from "react-router-dom";
function Romania() {
  return (
    <div className="header-logo">
      <img src={Logo} alt="" />
      <Link to='/login'>
        <button className="btn btn-danger">Conectare</button>
      </Link>
    </div>
  );
}

export default Romania;
