import React from "react";
import Carousel from "react-bootstrap/Carousel";

const GalleryZaluus = () => {
  return (
    <Carousel fade controls={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../assets/img/guys.png")}
          alt="..."
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../assets/img/chuulgan.png")}
          alt="..."
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../assets/img/kids.png")}
          alt="..."
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default GalleryZaluus;
