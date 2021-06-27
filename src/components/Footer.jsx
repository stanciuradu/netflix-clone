import React from "react";
import '../components/Footer.css';
function Footer() {
  return (
    <div className="footer container">
        <p>Ai întrebări? Sună la 0800-672-120</p>
      <div className="row row-cols-4">
        <div className="col-3">
            Întrebări frecvente
            Relații cu investitorii
            Declarație de confidențialitate
            Test de viteză
        </div>
        <div className="col-3">
            Asistență
            Cariere
            Preferințe de Cookie 
            Mențiuni legale
        </div>
        <div className="col-3">
            Cont 
            Modalitați de vizionare
            Infromații legate de companie
            Titluri originale Netflix
        </div>
        <div className="col-3">
            Centru media
            Condiții de utilizare
            Contactează-ne
        </div>
      </div>
    </div>
  );
}

export default Footer;
