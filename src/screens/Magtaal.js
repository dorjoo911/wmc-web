import React from "react";
import Footer from "../components/general/Footer";
import Navigation from "../components/general/Navigation";
import SongList from "../assets/media/SongsList";
import VideoList from "../assets/media/VideoList";

export default function Magtaal() {
  return (
    <>
      <Navigation />

      <div
        style={{
          textAlign: "center",
          width: "80%",
          margin: "5px auto",
        }}
      ></div>
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
              src={require("../assets/img/belief.png")}
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
              src={require("../assets/img/belief.png")}
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
              src={require("../assets/img/belief.png")}
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
        {/* <SongList /> */}
        <br />
        <VideoList />
      </div>
      <br />
      <Footer />
    </>
  );
}
