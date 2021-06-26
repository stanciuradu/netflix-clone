import React from "react";
import '../components/HomeMain.css';

class HomeMain extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
  render() {
    return (
      <div className="container text-center">
        <div class="row align-items-center">
          <div class="col">
              <h1>
            Acces nelimitat la filme, seriale și multe altele.
              </h1>
            <p>Vizionează oriunde. Anulează oricând.</p>
            Ești gata de vizionare? Introdu adresa de e-mail pentru a te abona
            sau pentru a reactiva abonamentul.
            <form>
              <input type="text" placeholder="Adresa de email" id='input-text' />
              <input type="submit" value="Începe >"  className='btn btn-danger'/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeMain;
