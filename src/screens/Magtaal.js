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
      <div
        style={{
          textAlign: "center",
          width: "80%",
          marginLeft: "10%",
        }}
      >
        <h3>
          Бид хүндэтгэлийн цуглаан, хүүхдийн цуглаан, залуусын цуглаан, өсвөрийн
          цуглаан, эсийн бүлгүүд, үүрийн залбирал ба шөнийн залбиралуудад
          тогтмол үйлчилж байна.
        </h3>
      </div>
      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        style={{
          textAlign: "center",
          width: "80%",
          marginLeft: "10%",
        }}
      >
        <div className="col">
          <div className="card h-100">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
              className="card-img-top"
              alt="Skyscrapers"
            />
            <div className="card-body">
              <h5 className="card-title">Халлелүяа баг</h5>
              <p className="card-text">Ханна ахлагч.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
              className="card-img-top"
              alt="Los Angeles Skyscrapers"
            />
            <div className="card-body">
              <h5 className="card-title">Сион баг</h5>
              <p className="card-text">У.Энхбаяр.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
              className="card-img-top"
              alt="Palm Springs Road"
            />
            <div className="card-body">
              <h5 className="card-title">Агапе баг</h5>
              <p className="card-text">Дөлгөөн ахлагч</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "80%", marginLeft: "10%", textAlign: "center" }}>
        <SongList />
        <VideoList />
      </div>
      <Footer />
    </>
  );
}
