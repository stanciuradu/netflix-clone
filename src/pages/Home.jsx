import React from "react";
import Logo from "../assets/images/logo.png";
import "../pages/Home.css";
function Romania() {
  return (
    <div className="header-logo">
      <img src={Logo} alt="" />
      <button className="btn btn-danger">Conectare</button>

    </div>
  );
}

export default Romania;
