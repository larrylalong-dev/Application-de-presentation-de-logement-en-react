import React from "react";

const LodgingAside = ({ data }) => {
  // Array for lodging rating with stars
  const range = [1, 2, 3, 4, 5];

  return (
    <aside className="lodgingInfos_asideLodging">
      <div className="asideLodging_landlord">
        <div className="landlord_identity">
          <p>
            {/* Separate firstName from lastName */}
            {data.host.name.split(" ")[0]} <br />
            {data.host.name.split(" ")[1]}{" "}
          </p>
          {/* Profile picture of host */}
          <img src={data.host.picture} alt={data.host.name}></img>
        </div>
      </div>
      <ul className="asideLodging_rating">
        {/* lodging rating by using map */}
        {range.map((el, index) =>
          el <= data.rating ? (
            <li key={data.id + "-ratingOn-" + index}>
              <img
                src="./img/star-orange.svg"
                alt={"rating " + (index + 1)}
              ></img>
            </li>
          ) : (
            <li key={data.id + "-ratingOff-" + index}>
              <img src="./img/star-grey.svg" alt={"rating " + index}></img>
            </li>
          )
        )}
      </ul>
    </aside>
  );
};

export default LodgingAside;
