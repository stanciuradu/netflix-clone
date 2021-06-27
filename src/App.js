import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import HomeMain from "./components/HomeMain";
import HomeContentOne from "./components/HomeContentOne";
import HomeContentTwo from "./components/HomeContentTwo";
import HomeContentThree from "./components/HomeContentThree";
import HomeContentFour from "./components/HomeContentFour";
import HomeContentFive from "./components/HomeContentFive";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="*" component={Page404} />
      </Switch>
      <HomeMain />
      <HomeContentOne />
      <HomeContentTwo />
      <HomeContentThree />
      <HomeContentFour />
      <HomeContentFive />
      <Footer />
    </div>
  );
}

export default App;
