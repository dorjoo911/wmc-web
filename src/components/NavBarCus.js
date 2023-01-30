import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
export default function NavBarCus() {
  const navigate = useNavigate();
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
        <MDBNavbarBrand onClick={goHome}>
          {" "}
          <img
            src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/274369433_4372302672871342_1364061837207403963_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WYFSejGSmysAX8hKLUd&_nc_ht=scontent-atl3-2.xx&oh=00_AfB-tHS_-VoI3Jt3FRzTFIgtoXNAuHTBV-rKD1o0Q2v3-g&oe=63D0B927"
            className="img-fluid rounded-pill"
            alt=""
            style={{ width: "50px" }}
          />{" "}
          WMC
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
              <MDBNavbarLink onClick={goHome}>Нүүр хуудас</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink onClick={aboutUs}>Бидний тухай</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Библи судлал</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBBtn outline color="success" onClick={pray}>
            Залбиралд нэгдэх
          </MDBBtn>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
