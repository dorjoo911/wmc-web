import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./components/general/Navigation";
import Footer from "./components/general/Footer";

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
      Home
      <Footer />
    </div>
  );
};

export default Home;
