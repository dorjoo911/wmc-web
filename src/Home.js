import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./components/general/Navigation";
import Footer from "./components/general/Footer";
import HomeCrousel from "./components/general/HomeCrousel";
import HomeNews from "./components/general/HomeNews";
import HomeGroupCards from "./components/general/HomeGroupCards";
import Verses from "./components/general/Verses";

const Home = () => {
  const navigate = useNavigate();
  const goMagtaal = () => {
    navigate(`/magtaal`);
  };
  const goZaluus = () => {
    navigate(`/zaluus`);
  };
  return (
    <div>
      <Navigation />
      <HomeCrousel />
      <div style={{ width: "80%", margin: "5px auto" }}>
        <div style={{ margin: "5px auto" }}>
          <HomeNews />
          <br />
          <HomeGroupCards />
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontFamily: "cursive",
              fontSize: "18px",
              textShadow: "2px 2px 3px rgba(0, 0, 0, 0.3)",
              backgroundColor: "rgba(200, 200, 200, 0.1)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <Verses />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
