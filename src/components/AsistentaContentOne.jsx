import React from "react";
import "../components/AsistentaContentOne.css";
import { Link } from "react-router-dom";

function AsistentaContentOne() {
  return (
    <div className="asistenta-content-one">
      <div className="container">
        <h6>Conectează-te pentru asistență personalizată.</h6>
        <div className="buttons-asistenta">
          <Link to="/login">
            <button type="button" className="btn btn-danger">
              Conectare
            </button>
          </Link>
          <button type="button" className="btn btn-light">
            Abonează-te la Netflix
          </button>
        </div>
        <h4>Subiecte populare:</h4>
        <div className="buttons-subiecte-populare">
          <button type="button" className="btn btn-light ">
            Cum sa te înregistrezi pe Netflix
          </button>
          <button type="button" className="btn btn-light">
            Abonamente si tarife
          </button>
          <button type="button" className="btn btn-light">
            Nu te poti conecta la Netflix
          </button>
        </div>
      </div>
    </div>
  );
}

export default AsistentaContentOne;
