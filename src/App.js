import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Page404 from "./pages/Page404";
import ÎntrebariFrecevente from "./pages/ÎntrebariFrecvente";
import Asistenta from "./pages//Asistenta/Asistenta";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path='/intrebari_frecvente' component={ÎntrebariFrecevente} />
        <Route path='/asistenta' component={Asistenta}/>
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
