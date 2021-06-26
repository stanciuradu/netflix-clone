import React from "react";
import '../components/HomeContentOne.css';

function HomeContentOne() {
  return (
    <div className="container">
      <div className="row row-cols-4">
        <div className="col-6">
            <h1>
            Vizionare pe TV.
            </h1>
            <p>
            Vizionează pe Smart TV, Playstation, Xbox, Chromecast, Apple TV, playere Blu-ray și altele.
            </p>
        </div>
        <div className="col-6">
            <img src="https://i.imgur.com/96vgeqV.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomeContentOne;
