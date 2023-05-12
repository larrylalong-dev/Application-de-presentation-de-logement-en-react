import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LodgingList = () => {
  // Hook state to update and use data
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch mock data
    const fetchData = async () => {
      const data = await fetch("./data/logements.json");
      const json = await data.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <ul className="homepageMain_lodgingList">
      {/* Map array data items to display list of lodgings in location */}
      {data.map((item, index) => (
        <li className="lodgingList_card" key={item.id + "-lodging-" + index}>
          {/* Link to lodging page */}
          <NavLink to={"/lodging" + item.id}>
            <h3>{item.title}</h3>
            <picture>
              <img src={item.cover} alt={item.title}></img>
            </picture>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default LodgingList;
