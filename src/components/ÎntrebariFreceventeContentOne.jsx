import React from "react";
import "./ÎntrebariFrecventeContentOne.css";

function ÎntrebariFreceventeContentOne() {
  return (
    <div class="container">
      <div className="section-intrebari">
        <h1 className='mt-2'>Ce este Netflix?</h1>
      </div>
      <div class="row-întrebari row-cols-2">
        <div class="col-6">
          <img src="https://i.imgur.com/RMLnJQV.png" alt="" />
          <p>
            Netflix este un serviciu de difuzare online bazat pe abonamente,
            care permite abonaților să vizioneze seriale și filme fără reclame
            pe un dispozitiv conectat la internet.
          </p>
          <p>
            De asemenea, poți descărca seriale și filme pe dispozitivul iOS,
            Android sau Windows 10 și le poți viziona fără conexiune la
            internet.
          </p>

          <p>
            Dacă ești deja abonat și dorești să afli mai multe despre folosirea
            serviciului Netflix, accesează Familiarizează-te cu Netflix.
          </p>
        </div>
        <div class="col-6">
          <h3>Articole sugerate</h3>
          <ul>
            <li>Familiarizează-te cu Netflix</li>
            <li>Facturare și plăți</li>
            <li>Carduri cadou Netflix</li>
            <li>Nu te poți conecta la Netflix</li>
            <li>Cum poți crea sau edita profiluri</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ÎntrebariFreceventeContentOne;
