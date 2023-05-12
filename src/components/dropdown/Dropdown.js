import React, { useState } from "react";

const Dropdown = ({ dropdownContent, dropdownTitle }) => {
  // Hook state to change css style class for icon dropdown
  const [dropdownClass, setDropdownClass] = useState("dropdown");

  return (
    <div className={dropdownClass}>
      {/* Dropdown title */}
      <h3>
        {dropdownTitle}
        <span
          onClick={() =>
            dropdownClass === "dropdown"
              ? setDropdownClass("dropdown--deployed")
              : setDropdownClass("dropdown")
          }
        >
          <img src="./img/arrow-icon.svg" alt="icon deploy"></img>
        </span>
      </h3>
      {/* Dropdown content */}
      <div className="dropdown_content">
        {/* DOM structure depending on data type (array or string) */}
        {Array.isArray(dropdownContent) === false ? (
          <p>{dropdownContent}</p>
        ) : (
          dropdownContent.map((el, index) => <p key={el + index}>{el}</p>)
        )}
      </div>
    </div>
  );
};

export default Dropdown;
