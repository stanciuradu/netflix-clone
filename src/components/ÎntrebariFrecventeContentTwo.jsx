import React from "react";
import '../components/ÎntrebariFreceventeContentTwo.css';

function ÎntrebariFrecventeContentTwo() {
  return (
    <div class="container">
        <div className='section-intrebari'>
            <h1>Seriale si filme</h1>
        </div>
      <div class="row-întrebari row-cols-2">
        <div class="col-12">
            <img src="https://i.imgur.com/fkGIG8i.png" alt="" className='w-50' />
            <h5>
            Conținutul Netflix variază în funcție de regiune și se poate modifica în timp.
            </h5>
            <h5>
            Cu cât vizionezi mai mult, recomandările serialelor și ale filmelor de pe Netflix vor fi tot mai bune.
            </h5>
        </div>
      </div>
    </div>
  );
}

export default ÎntrebariFrecventeContentTwo;
