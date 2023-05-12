import React, { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import LodgingList from "../../components/lodgingList/LodgingList";
import Slogan from "../../components/slogan/Slogan";

const Homepage = () => {
  useEffect(() => {
    // On load, The page is displayed at his top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contentPage">
      <div>
        <Header />
        <Slogan
          slogan1="Chez vous, "
          slogan2="partout et ailleurs"
          background="slogan--sea"
        />
      </div>

      <main className="homepage_main">
        <LodgingList />
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;
