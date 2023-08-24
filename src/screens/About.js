import React from "react";
import Navigation from "../components/general/Navigation";
import Footer from "../components/general/Footer";

export default function About() {
  return (
    <div>
      <Navigation />
      <br />
      <div
        className="card d-flex flex-column justify-content-center"
        style={{
          backgroundColor: "#f7f7f7", // Smoother gray background
          borderRadius: "10px",
          padding: "20px",
          width: "80%",
          margin: "0 auto",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", // Shadow effect
          border: "none", // Remove the border
        }}
      >
        <h1
          className="card-title text-center fs-4"
          style={{ fontWeight: "bold", marginBottom: "10px" }} // Bold text
        >
          Washington Mongolian Church
        </h1>
        <p
          className="card-text text-center fs-5"
          style={{
            color: "#333", // Darker gray text
            lineHeight: "1.5",
            textAlign: "justify", // Improved line height
          }}
        >
          Манай сүмийн эрхэм зорилго нь АНУ болон олон улс орнуудад тархсан
          Монголчуудад сайн мэдээ, авралын зар тарааж, тэдэнд хэрэгтэй зүйлээр
          тусалснаар Их Эзэний хаанчлал, алдрын төлөө ажиллах явдал юм.
          Өнөөдрийн байдлаар тус чуулга нь өргөжиж үндсэн 10 хэлтсүүд,
          залуучуудын цуглаан, дунд сургуулийн цуглаан, хүүхдийн цуглаанаас
          гадна байнгын цугларалттай 12 "Гэрийн Бүлгэм"-тэй үйл ажиллагаа явуулж
          байна. Та бүхэн манай сүмд тавтай морилоорой, бидний үүд хаалга танд
          үргэлж нээлттэй байх болно. Та бидний амьдралд Бурханы гайхамшиг
          биелэлээ олох болтугай хэмээн Есүсийн нэр дээр ерөөж байна.
        </p>
        <p className="card-left text-left fs-6" style={{ color: "#777" }}>
          WMC team
        </p>
      </div>

      <br />
      <Footer />
    </div>
  );
}
