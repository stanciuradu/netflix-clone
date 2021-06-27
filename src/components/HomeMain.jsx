import React from "react";
import "../components/HomeMain.css";

class HomeMain extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
  }
  handleChangeEmail(event){
    const newEmail=event.target.value;
    this.setState({email:newEmail})
  }
  render() {
    return (
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col">
            <h1>Acces nelimitat la filme, seriale și multe altele.</h1>
            <p>Vizionează oriunde. Anulează oricând.</p>
            <p>
              Ești gata de vizionare? Introdu adresa de e-mail pentru a te abona
              sau pentru a reactiva abonamentul.
            </p>
            <form>
              <input
                type="text"
                placeholder="Adresa de email"
                id="input-text"
                // pentru a avea control component 100% asupra inputului
                value={this.state.email}
                onChange={(event)=>this.handleChangeEmail(event)}
              />
              <input
                type="submit"
                value="Începe >"
                className="btn btn-danger"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeMain;
