import React from "react";
import '../components/HomeContentTwo.css';

function HomeContentTwo() {
  return (
    <div className="container">
      <div className="row row-cols-2">
        <div className="col-6">
            <img src="https://i.imgur.com/tskxjlo.png" alt="" />
        </div>
        <div className="col-6">
            <h1>
            Descarcă serialele preferate pentru a le viziona offline.
            </h1>
            <h3>
            Salvează cu ușurință titlurile preferate și vei avea mereu ceva de vizionat.
            </h3>
        </div>

      </div>
    </div>
  );
}

export default HomeContentTwo;
