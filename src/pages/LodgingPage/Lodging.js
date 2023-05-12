import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import LodgingHeader from "../../components/lodgingHeader/LodgingHeader";
import LodgingAside from "../../components/lodgingAside/LodgingAside";
import LodgingArticle from "../../components/lodgingArticle/LodgingArticle";
import Error404 from "../Error404Page/Error404";
import LodgingGallery from "../../components/lodgingGallery/LodgingGallery";

const Lodging = () => {
  // Hook to collect id passed in URL
  const { lodgingID } = useParams();
  // Hook state to update current data
  const [data, setData] = useState({
    equipments: [],
    host: { name: "", picture: "" },
    pictures: [],
    tags: [],
  });

  useEffect(() => {
    // On load, The page is displayed at his top
    window.scrollTo(0, 0);
    // Fetch mock data
    const fetchData = async () => {
      const data = await fetch("./data/logements.json");
      const json = await data.json();
      // Use "find" method to collect only current lodging data
      const lodgingData = json.find((item) => item.id === lodgingID);
      lodgingData ? setData(lodgingData) : setData(null);
    };
    fetchData();
  }, [lodgingID]);

  return data !== null ? (
    <div className="contentPage">
      <Header />

      <main className="lodgingPage_main">
        <LodgingGallery data={data} />
        <section className="lodgingPageMain_lodgingInfos">
          <div className="lodgingInfos_general">
            <LodgingHeader data={data} />
            <LodgingAside data={data} />
          </div>
          <LodgingArticle data={data} />
        </section>
      </main>

      <Footer />
    </div>
  ) : (
    // If no data found with URL id, redirects to 404 error page
    <Error404 />
  );
};

export default Lodging;
