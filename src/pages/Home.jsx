import React from "react";
import Header from "../components/Header";
import HomeMain from "../components/HomeMain";
import HomeContentOne from "../components/HomeContentOne";
import HomeContentTwo from "../components/HomeContentTwo";
import HomeContentThree from "../components/HomeContentThree";
import HomeContentFour from "../components/HomeContentFour";
import HomeContentFive from "../components/HomeContentFive";
import Footer from "../components/Footer";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Header />
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

export default Home;
