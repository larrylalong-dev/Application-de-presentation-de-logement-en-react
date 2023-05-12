import React from "react";

const Slogan = ({ slogan1, slogan2, background }) => {
  // Slogan with props to change background (with a css class) and text
  return (
    <div className={background}>
      <h2>
        <span>{slogan1}</span>
        <span>{slogan2}</span>
      </h2>
    </div>
  );
};

export default Slogan;
