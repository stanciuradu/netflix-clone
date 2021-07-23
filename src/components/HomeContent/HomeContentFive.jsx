import React, { Component } from "react";
import { ReactComponent as Open } from "../../assets/icons/open.svg";
import "../../components/HomeContent/HomeContentFive.css";

export class HomeContentFive extends Component {
  constructor() {
    super();
    this.state = {
      isTextDisplayOne: false,
      isTextDisplayTwo: false,
      isTextDisplayThree: false,
      isTextDisplayFour: false,
      isTextDisplayFive: false,
      isTextDisplaySix: false,
    };
  }

  handleAddTextOne() {
    this.setState({ isTextDisplayOne: true });
  }
  handleAddTextTwo() {
    this.setState({ isTextDisplayTwo: true });
  }
  handleAddTextThree() {
    this.setState({ isTextDisplayThree: true });
  }
  handleAddTextFour() {
    this.setState({ isTextDisplayFour: true });
  }
  handleAddTextFive() {
    this.setState({ isTextDisplayFive: true });
  }
  handleAddTextSix() {
    this.setState({ isTextDisplaySix: true });
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Întrebări frecvente</h1>
        <div className="span-întrebări text-center">
          <h1>Ce este netflix?</h1>
          <Open className="open" onClick={() => this.handleAddTextOne()} />
        </div>
        {this.state.isTextDisplayOne ? (
          <h1>
            Netflix este un serviciu de difuzare online care le permite
            abonaților să vizioneze o gamă largă de titluri premiate, seriale,
            filme, animeuri, documentare și multe altele pe mii de dispozitive
            conectate la internet. Vizionează oricât, oricând și fără nicio
            reclamă, la un tarif avantajos. Întotdeauna descoperi ceva nou,
            deoarece adăugăm seriale și filme noi în fiecare săptămână.
          </h1>
        ) : null}
        <div className="span-întrebări text-center">
          <h1>Cat costa serviciul Netflix?</h1>
          <Open className="open" onClick={() => this.handleAddTextTwo()} />
        </div>
        {this.state.isTextDisplayTwo ? (
          <h1>
            Vizionează Netflix pe smartphone, tabletă, Smart TV, laptop sau
            orice dispozitiv de difuzare online, întregul conținut fiind
            disponibil pentru un tarif lunar fix. Tariful abonamentelor variază
            de la 7,99 EUR la 11,99 EUR pe lună. Fără costuri suplimentare, fără
            contracte.
          </h1>
        ) : null}
        <div className="span-întrebări text-center">
          <h1>Unde pot viziona?</h1>
          <Open className="open" onClick={() => this.handleAddTextThree()} />
        </div>
        {this.state.isTextDisplayThree ? (
          <h1>
            Vizionează oriunde, oricând, pe un număr nelimitat de dispozitive.
            Conectează-te la contul Netflix pentru a viziona imediat conținutul,
            fie online pe netflix.com de pe computerul personal, fie de pe un
            dispozitiv conectat la internet cu aplicația Netflix, inclusiv
            dispozitive Smart TV, smartphone-uri, playere media de difuzare
            online, tablete sau console de jocuri. Poți și să descarci serialele
            preferate pe dispozitivul mobil iOS sau Android ori pe computerul
            sau tableta cu Windows 10. Folosește opțiunea de descărcare a
            titlurilor pentru a viziona oriunde te-ai afla, fără conexiune la
            internet. Vizionează Netflix oriunde.
          </h1>
        ) : null}
        <div className="span-întrebări text-center">
          <h1>Cum anulez?</h1>
          <Open className="open" onClick={() => this.handleAddTextFour()} />
        </div>
        {this.state.isTextDisplayFour ? (
          <h1>
            Netflix este un serviciu flexibil. Nu există clauze ascunse sau
            obligații. Poți anula cu ușurință contul din două clicuri. Nu există
            taxe de anulare. Poți activa sau anula contul în orice moment.
          </h1>
        ) : null}
        <div className="span-întrebări text-center">
          <h1>Ce pot viziona pe Netflix?</h1>
          <Open className="open" onClick={() => this.handleAddTextFive()} />
        </div>
        {this.state.isTextDisplayFive ? (
          <h1>
            Netflix are o bibliotecă extraordinar de bogată, cu programe
            originale Netflix premiate, lungmetraje, documentare, seriale,
            animeuri și multe altele. Vizionează oricât, oricând vrei.
          </h1>
        ) : null}
        <div className="span-întrebări text-center">
          <h1>Este Netflix adecvat copiilor?</h1>
          <Open className="open" onClick={() => this.handleAddTextSix()} />
        </div>
        {this.state.isTextDisplaySix ? (
          <h1>
            Interfața Netflix pentru copii este inclusă în abonament pentru a le
            oferi părinților siguranța că cei mici se bucură de seriale și filme
            adecvate, într-un spațiu creat special pentru ei. Profilurile pentru
            copii au funcția de control parental pe bază de cod PIN, care
            permite restricționarea categoriei de vârstă a conținutului pe care
            îl pot viziona copiii și blocarea anumitor titluri pe care nu
            dorești să le vadă.
          </h1>
        ) : null}
        <p>
          Ești gata de vizionare? Introdu adresa de e-mail pentru a te abona sau
          pentru a reactiva abonamentul.
        </p>
        <form>
          <input type="text" placeholder="Adresa de email" id="input-text" />
          <input type="submit" value="Începe >" className="btn btn-danger" />
        </form>
      </div>
    );
  }
}

export default HomeContentFive;
