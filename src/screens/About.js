import React, { useState, useEffect, useRef } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";

import NavBarCus from "../components/general/NavBarCus";
import Footer from "../components/general/Footer";

export default function About() {
  const [cardHeight, setCardHeight] = useState("auto");
  const [overlayHeight, setOverlayHeight] = useState("auto");
  const cardRef = useRef(null);

  useEffect(() => {
    // Get the height of the card's text
    const cardTextHeight =
      cardRef.current?.querySelector(".card-text").offsetHeight;

    // Set the height of the card and overlay
    setCardHeight(cardTextHeight + 200);
    setOverlayHeight(cardTextHeight + 120);
  }, []);

  return (
    <div style={{ margin: "5px" }}>
      <NavBarCus />
      <br />
      <MDBCard
        background="dark"
        className="text-white"
        style={{ maxWidth: "800px", margin: "0 auto", height: cardHeight }}
        ref={cardRef}
      >
        <MDBCardImage
          overlay
          src="https://mdbootstrap.com/img/new/slides/017.webp"
          alt="..."
          style={{
            width: "100%",
            height: 0,
            paddingTop: "56.25%" /* 16:9 aspect ratio */,
            position: "relative",
          }}
        />
        <img
          src={require("../assets/img/churchHouse.png")}
          alt="..."
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <MDBCardOverlay>
          <MDBCardTitle
            style={{
              fontSize: "28px",
              padding: "20px",
              textAlign: "center",
              textShadow: "2px 2px 2px rgba(255,255,255,0.5)", // light-colored text shadow
            }}
          >
            Washington Mongolian Church
          </MDBCardTitle>
          <MDBCardText
            style={{
              fontSize: "24px",
              padding: "20px",
              height: "auto",
              color: "white",
              textShadow: "1px 1px 1px rgba(255,255,255,0.5)", // light-colored text shadow
            }}
          >
            Манай сүмийн эрхэм зорилго нь АНУ болон олон улс орнуудад тархсан
            Монголчуудад сайн мэдээ, авралын зар тарааж, тэдэнд хэрэгтэй зүйлээр
            тусалснаар Их Эзэний хаанчлал, алдрын төлөө ажиллах явдал юм.
            Өнөөдрийн байдлаар тус чуулга нь өргөжиж үндсэн 10 хэлтсүүд,
            залуучуудын цуглаан, дунд сургуулийн цуглаан, хүүхдийн цуглаанаас
            гадна байнгын цугларалттай 12 "Гэрийн Бүлгэм"-тэй үйл ажиллагаа
            явуулж байна. Та бүхэн манай сүмд тавтай морилоорой, бидний үүд
            хаалга танд үргэлж нээлттэй байх болно. Та бидний амьдралд Бурханы
            гайхамшиг биелэлээ олох болтугай хэмээн Есүсийн нэр дээр ерөөж
            байна.
          </MDBCardText>
          <MDBCardText
            style={{
              fontSize: "12px",
              padding: "20px",
              textAlign: "right",
              textShadow: "1px 1px 1px rgba(255,255,255,0.5)", // light-colored text shadow
            }}
          >
            WMC team
          </MDBCardText>
        </MDBCardOverlay>
      </MDBCard>
      <br />
      <Footer />
    </div>
  );
}
