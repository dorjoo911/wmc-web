import React from "react";

export default function HomeNews() {
  const customCardStyle = {
    margin: "g-4 auto",
    border: "none",
    backgroundColor: "#f8f9fa", // Secondary gray color
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)", // 3D shadow effect
  };

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card h-100" style={customCardStyle}>
          <div className="card-body">
            <h5 className="card-title">Мэдээлэл</h5>
            <p className="card-text">
              30 days left until the "Faith Fighter" Mongolian Youth Conference
              starts. 71 people have registered so far. Secure your spot now!
            </p>
            <a href="#" className="btn btn-primary">
              Цааш унших
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100" style={customCardStyle}>
          <div className="card-body">
            <h5 className="card-title">Мэдээлэл</h5>
            <p className="card-text">
              30 days left until the "Faith Fighter" Mongolian Youth Conference
              starts. 71 people have registered so far. Secure your spot now!
            </p>
            <a href="#" className="btn btn-primary">
              Цааш унших
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
