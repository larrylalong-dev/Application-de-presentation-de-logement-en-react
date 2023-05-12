import React, { useState } from "react";

const LodgingGallery = ({ data }) => {
  // Hook state index for array data containing images url
  const [indexGallery, setIndexGallery] = useState(0);

  return (
    <section className="lodgingPageMain_lodgingGallery">
      <div className="lodgingGallery_containerGallery">
        <picture>
          {/* Img displayed by default (before arrows nav events) */}
          <img
            src={data.pictures[indexGallery]}
            alt={"image " + data.pictures[indexGallery]}
            className="containerGallery_image"
          ></img>
        </picture>
        {/* Counter images gallery */}
        <p className="containerGallery_counter">
          {indexGallery + 1}/{data.pictures.length}
        </p>
        {/* Display/hide arrows nav (depending on array data pictures length) */}
        <div
          className={
            data.pictures.length > 1
              ? "containerGallery_navButtons"
              : "containerGallery_navButtons--disabled"
          }
        >
          {/* Nav Arrow left event */}
          <picture
            onClick={() =>
              indexGallery > 0
                ? setIndexGallery(indexGallery - 1)
                : setIndexGallery(data.pictures.length - 1)
            }
          >
            <img
              src="./img/gallery-arrow-icon.png"
              alt="left button"
              className="navButtons--left"
            />
          </picture>
          {/* Nav Arrow right event */}
          <picture
            onClick={() =>
              indexGallery < data.pictures.length - 1
                ? setIndexGallery(indexGallery + 1)
                : setIndexGallery(0)
            }
          >
            <img
              src="./img/gallery-arrow-icon.png"
              alt="right button"
              className="navButtons--right"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default LodgingGallery;
