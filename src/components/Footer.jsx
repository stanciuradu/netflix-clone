import React from "react";
import "../components/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer container">
      <p>Ai întrebări? Sună la 0800-672-120</p>
      <div className="row row-cols-4">
        <div className="col-3">
          <Link to="/intrebari_frecvente" className='link-footer'>Întrebări frecvente</Link>
        </div>
        <div className="col-3">
          <Link to='/asistenta' className='link-footer'>Asistență</Link>
        </div>
        <div className="col-3">
          Cont Modalitați de vizionare Infromații legate de companie Titluri
          originale Netflix
        </div>
        <div className="col-3">
          Centru media Condiții de utilizare Contactează-ne
        </div>
      </div>
    </div>
  );
}

export default Footer;
