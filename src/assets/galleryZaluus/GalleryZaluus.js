import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const GalleryZaluus = () => {
  return (
    <MDBCarousel showControls fade>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src={require("../../assets/img/chuulgan.png")}
        alt="..."
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src={require("../../assets/img/chuulgan.png")}
        alt="..."
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src={require("../../assets/img/chuulgan.png")}
        alt="..."
      />
    </MDBCarousel>
  );
};
export default GalleryZaluus;
