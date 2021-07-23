import React from "react";
import FooterContentFive from "../../components/FooterContent/FooterContentFive";

function ÎntrebariFrecventeContentFive() {
  return (
    <div class="container">
      <div className="section-intrebari">
        <h1>Să începem!</h1>
      </div>
      <div class="row-întrebari row-cols-2">
        <div class="col-12">
          <img src="https://i.imgur.com/JFWJgfP.png" alt="" className="w-50" />
          <h5>
          Urmează acești pași simpli pentru a începe să vizionezi titlurile Netflix chiar astăzi:
          </h5>
          <ol>
              <li>
              Accesează netflix.com/signup.
              </li>
              <li>
              Alege abonamentul potrivit pentru tine.
              </li>
              <li>
              Creează un cont prin introducerea adresei de e-mail și crearea parolei.
              </li>
              <li>
              Introdu o metodă de plată. Ca abonat Netflix, vei fi taxat o dată pe lună, la data la care te-ai înregistrat.
              </li>
          </ol>
          <h5>Gata. Bucură-te de Netflix!</h5>
        </div>
      </div>
      <FooterContentFive />
    </div>
  );
}

export default ÎntrebariFrecventeContentFive;
