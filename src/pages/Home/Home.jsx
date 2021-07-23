import React from "react";
import Header from "../../components/Header/Header";
import HomeMain from "../../components/HomeMain/HomeMain";
import HomeContentOne from "../../components/HomeContent/HomeContentOne";
import HomeContentTwo from "../../components/HomeContent/HomeContentTwo";
import HomeContentThree from "../../components/HomeContent/HomeContentThree";
import HomeContentFour from "../../components/HomeContent/HomeContentFour";
import HomeContentFive from "../../components/HomeContent/HomeContentFive";
import Footer from "../../components/Footer/Footer";
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
