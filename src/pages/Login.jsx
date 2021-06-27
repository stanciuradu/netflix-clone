import React from "react";
import Logo from "../assets/images/logo.png";
import "../pages/Login.css";
import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="login">
        <img src={Logo} alt="" />
        <div className='form-model'>
        <h1 className="text-center">Conectare</h1>
        <form>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email sau număr de telefon"
          />
          <input type="password" name="" id="" placeholder="Parolă" />
          <input
            type="submit"
            value="Conectare"
            className="btn btn-danger mt-2"
          />
          <div className="asistență">
            <div className="utilizator">
              <input type="checkbox" name="" id="check" />
              <label htmlFor="check">Memorare utilizator</label>
            </div>
            <Link className="link" to="/asistență">
              <p>Ai nevoie de ajutor?</p>
            </Link>
          </div>
        </form>
        <div className="login-facebook">
          <Facebook className="icon-facebook" />
          <Link className="link-facebook">
            <p>Conectare cu Facebook</p>
          </Link>
        </div>
        <div className="inregistrare">
          <p>Ești nou la Netflix?</p>
          <Link to="/inregistrare" className="link-inregistrare">
            <p>Inregistreaza-te acum</p>
          </Link>
        </div>
        <div className="detalii">
          <p>
            Această pagină este protejată prin Google reCAPTCHA pentru a ne
            asigura că nu ești un robot.
          </p>
        </div>
        <div className="back-home">
          <Link to="/">
            <button className="btn btn-warning">Înapoi la Home</button>
          </Link>
        </div>

        </div>
      </div>
    );
  }
}

export default Login;
