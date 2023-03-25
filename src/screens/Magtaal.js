import React from "react";
import Footer from "../components/Footer";
import NavBarCus from "../components/NavBarCus";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import SongList from "../components/SongsList";
import VideoList from "../components/VideoList";

export default function Magtaal() {
  return (
    <>
      <NavBarCus />
      <div style={{ width: "80%", marginLeft: "10%", textAlign: "center" }}>
        <MDBCarousel showControls showIndicators>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={1}
            src={require("../assets/img/song.png")}
            alt="..."
          >
            <h5>Халлелүяа баг</h5>
            <p>Ханна ахлагч.</p>
          </MDBCarouselItem>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={2}
            src={require("../assets/img/song.png")}
            alt="..."
          >
            <h5>Сион баг</h5>
            <p>У.Энхбаяр.</p>
          </MDBCarouselItem>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={3}
            src={require("../assets/img/song.png")}
            alt="..."
          >
            <h5>Агапе баг</h5>
            <p>Дөлгөөн ахлагч</p>
          </MDBCarouselItem>
        </MDBCarousel>
        <h3>
          Бид хүндэтгэлийн цуглаан, хүүхдийн цуглаан, залуусын цуглаан, өсвөрийн
          цуглаан, эсийн бүлгүүд, үүрийн залбирал ба шөнийн залбиралуудад
          тогтмол үйлчилж байна.
        </h3>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%", padding: "20px" }}>
            <SongList />
          </div>
          <div style={{ width: "50%", padding: "20px" }}>
            <VideoList />
          </div>
        </div>
        Магтан дуу - Voice mp3 Бичлэгтэй магтаал - Clip-тэй video
      </div>
      <Footer />
    </>
  );
}
