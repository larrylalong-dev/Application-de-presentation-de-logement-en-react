import React from "react";

const LodgingHeader = ({ data }) => {
  return (
    <header className="lodgingInfos_headerLodging">
      <div className="headerLodging_title">
        <h1>{data.title}</h1>
        <h2>{data.location}</h2>
      </div>
      <ul className="lodgingInfos_tags">
        {/* Map array data tags to display list of tags */}
        {data.tags.map((tag, index) => (
          <li key={data.id + "-" + tag + "-" + index}>{tag}</li>
        ))}
      </ul>
    </header>
  );
};

export default LodgingHeader;
