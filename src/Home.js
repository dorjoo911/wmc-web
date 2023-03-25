import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBTypography,
  MDBCardHeader,
  MDBFooter,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCardFooter,
} from "mdb-react-ui-kit";

import Verses from "./components/Verses";
import NavBarCus from "./components/NavBarCus";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goMagtaal = () => {
    navigate(`/magtaal`);
  };
  return (
    <div style={{ textAlign: "center", margin: "5px" }}>
      <NavBarCus />
      <div style={{ position: "relative", zIndex: "1" }}>
        <Banner />
      </div>
      <MDBCarousel showControls showIndicators>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src={require("./assets/img/churchHouse.png")}
          alt="..."
        >
          <h5>Монгол Сүм</h5>
          <p>Вашингтон ДиСи дэхь Монгол сүм чуулганы байр.</p>
        </MDBCarouselItem>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src={require("./assets/img/chuulgan.png")}
          alt="..."
        >
          <h5>Нэгдсэн чуулган</h5>
          <p>Зүүн эрэг орчимын Христ итгэлт хүмүүсийн нэгдсэн чуулган.</p>
        </MDBCarouselItem>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src={require("./assets/img/belief.png")}
          alt="..."
        >
          <h5>Залбирлын хүч</h5>
          <p>Есүстэй хамтдаа Нөхөрлөлд.</p>
        </MDBCarouselItem>
      </MDBCarousel>
      <br />
      <div
        style={{
          marginLeft: "10%",
          width: "80%",
        }}
      >
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                style={{ width: "100%", height: "60%", objectFit: "cover" }}
                src={require("./assets/img/cell.png")}
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Эсийн бүлэг үйлчлэл</MDBCardTitle>
                <MDBCardText>
                  Хамтдаа Библи судлангаа нөхөрлөх, танилцах, бие биенийхээ
                  төлөө залбирах, сүнслэг өсөлт ..
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <MDBBtn href="#" outline color="success">
                  Элсэн орох
                </MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                style={{ width: "100%", height: "60%", objectFit: "cover" }}
                src={require("./assets/img/song.png")}
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Магтаал үйлчлэл</MDBCardTitle>
                <MDBCardText>
                  Амьсгалтай бүхэн Эзэнийг магтагтун. Вашингтон Монгол цуглаан
                  маань одоогоор 20 хүний бүрэлдэхүүнтэй 3 магтаалын багаар
                  үйлчилж байна.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <MDBBtn onClick={goMagtaal} outline color="success">
                  Дэлгэрэнгүй ...
                </MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                style={{ width: "100%", height: "60%", objectFit: "cover" }}
                src={require("./assets/img/pastor.png")}
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Тэргүүн пастор</MDBCardTitle>
                <MDBCardText>
                  Huang Pil Nam Зоригоо. Тус сүмд 20 дахь жилдээ үйлчилж байна.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <MDBBtn href="#" outline color="success">
                  Дэлгэрэнгүй харах
                </MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                style={{ width: "100%", height: "60%", objectFit: "cover" }}
                src={require("./assets/img/pray.png")}
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Хүндэтгэлийн чуулган</MDBCardTitle>
                <MDBCardText>
                  Бурханы үгийн сонсож түүнийн танин мэдэхийг хүсвэл Бүтэн сайн
                  өдрийн 2pm цагт үргэлж нээлттэй ...
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <MDBBtn href="#" outline color="success">
                  Сүмд хамрагдах
                </MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                style={{ width: "100%", height: "60%", objectFit: "cover" }}
                src={require("./assets/img/guys.png")}
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Залуучуудын нөхөрлөл</MDBCardTitle>
                <MDBCardText>
                  Бурханы үгийн сонсож түүнийн танин мэдэхийг хүсвэл Бүтэн сайн
                  өдрийн 2pm цагт үргэлж нээлттэй ...
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <MDBBtn href="#" outline color="success">
                  Нөхөрлөлд хамрагдах
                </MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                style={{ width: "100%", height: "60%", objectFit: "cover" }}
                src={require("./assets/img/kids.png")}
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Хүүхдийн үйлчилэл</MDBCardTitle>
                <MDBCardText>
                  Бурханы үгийн сонсож түүнийн танин мэдэхийг хүсвэл Бүтэн сайн
                  өдрийн 2pm цагт үргэлж нээлттэй ...
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <MDBBtn href="#" outline color="success">
                  Үйлчлэлд хамрагдах
                </MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
      <br />
      <MDBCard style={{ textAlign: "center", width: "80%", marginLeft: "10%" }}>
        <MDBCardHeader style={{ fontSize: "24px" }}>
          <Verses />
        </MDBCardHeader>
        <MDBCardBody>
          <MDBTypography blockquote className="mb-0">
            <p>
              Cүмд тавтай морил! Бидний алсын хараа бол DMV болон бусад хүмүүс
              бүгд цэцэглэн хөгжихийн тулд бидний үеийг Есүстэй харилцах
              харилцааг өөрчлөх, бие биетэйгээ жинхэнэ нийгэмлэг болгон хөтлөх
              явдал юм.
            </p>
            <footer className="blockquote-footer">
              Тэргүүн пастор: <cite title="Source Title">Huang Pil Nam</cite>
            </footer>
          </MDBTypography>
        </MDBCardBody>
      </MDBCard>
      <br />
      <br />
      <Footer />
      <br />
    </div>
  );
};

export default Home;
