import React from "react";
import Dropdown from "../dropdown/Dropdown";

const LodgingArticle = ({ data }) => {
  return (
    <article className="lodgingInfos_articleLodging">
      <div className="articleLodging_card">
        <Dropdown
          dropdownContent={data.description}
          dropdownTitle="Description"
        />
      </div>
      <div className="articleLodging_card">
        <Dropdown
          dropdownContent={data.equipments}
          dropdownTitle="Équipement"
        />
      </div>
    </article>
  );
};

export default LodgingArticle;
