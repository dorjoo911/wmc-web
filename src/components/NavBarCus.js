import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBBtn,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "./NavBarCus.css";

export default function NavBarCus() {
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
    <MDBNavbar expand="lg" dark bgColor="dark">
      <MDBContainer fluid>
        <MDBNavbarBrand onClick={goHome} className="navbar-brand-custom">
          {" "}
          <img
            src={require("../assets/img/wmc-logo.png")}
            className="img-fluid rounded-pill"
            alt=""
            style={{ width: "50px" }}
          />{" "}
          Washington Mongolian Church
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavText(!showNavText)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavText}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink
                active={location.pathname === "/home"}
                onClick={goHome}
              >
                Нүүр хуудас
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                active={location.pathname === "/aboutus"}
                onClick={aboutUs}
              >
                Бидний тухай
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="https://www.bible.com/bible/1590/GEN.1.%D0%90%D0%912013">
                Библи судлал
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBBtn outline color="success" onClick={pray}>
            Бүртгэлтэй хэрэглэгчид
          </MDBBtn>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
