import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showNavText, setShowNavText] = useState(false);

  const pray = () => {
    navigate(`/auth`);
  };

  const aboutUs = () => {
    navigate(`/aboutus`);
  };

  const goHome = () => {
    navigate(`/home`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a onClick={goHome} className="navbar-brand navbar-brand-custom">
          <img
            src={require("../../assets/img/wmc-logo.png")}
            className="img-fluid rounded-pill"
            alt=""
            style={{ width: "50px", cursor: "pointer" }}
          />
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={aboutUs}>
                Тухай
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.bible.com/bible/1590/GEN.1.%D0%90%D0%912013"
              >
                Библи
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Нэвтрэх
              </a>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
