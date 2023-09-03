import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function HomeGroupCards() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const navigateToCellGroups = () => {
    navigate("/cellgroups");
  };
  const navigateToZaluus = () => {
    navigate("/zaluus");
  };
  const navigateToMagtaal = () => {
    navigate("/magtaal");
  };
  const navigateToDetail = () => {
    navigate("/detail");
  };
  const imageStyle = {
    height: "200px", // Adjust the height as needed
    objectFit: "cover",
  };
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <img
            src={require("../../assets/img/pray.png")}
            className="card-img-top"
            alt="..."
            style={imageStyle} // Apply the inline CSS here
          />
          <div className="card-body">
            <h5 className="card-title">Хүндэтгэлийн чуулган</h5>
            <p className="card-text">
              Бурханы үгийн сонсож түүнийн танин мэдэхийг хүсвэл Бүтэн сайн
              өдрийн 2pm цагт үргэлж нээлттэй ...
            </p>
          </div>
          <div
            className="card-footer"
            style={{ color: "blue", textAlign: "right", cursor: "pointer" }}
            onClick={navigateToDetail}
          >
            <small>Дэлгэрэнгүй ...</small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img
            src={require("../../assets/img/primePastor.jpg")}
            className="card-img-top"
            alt="..."
            style={imageStyle}
          />
          <div className="card-body">
            <h5 className="card-title">Пасторын мэндчилгээ</h5>
            <p className="card-text">
              Cүмд тавтай морил! Бидний алсын хараа бол DMV болон бусад хүмүүс
              бүгд цэцэглэн хөгжихийн тулд бидний үеийг Есүстэй харилцах
              харилцааг өөрчлөх, бие биетэйгээ жинхэнэ нийгэмлэг болгон хөтлөх
              явдал юм.
            </p>
          </div>
          <div
            className="card-footer d-flex justify-content-between align-items-center"
            onClick={navigateToDetail}
          >
            <small className="text-muted">
              Тэргүүн пастор: <cite title="Source Title">Huang Pil Nam</cite>
            </small>
            <small
              className="text-primary"
              style={{ color: "blue", cursor: "pointer" }}
            >
              Дэлгэрэнгүй ...
            </small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img
            src={require("../../assets/img/cell.png")}
            className="card-img-top"
            alt="..."
            style={imageStyle}
          />
          <div className="card-body">
            <h5 className="card-title">Эсийн бүлэг үйлчлэл</h5>
            <p className="card-text">
              Хамтдаа Библи судлангаа нөхөрлөх, танилцах, бие биенийхээ төлөө
              залбирах, сүнслэг өсөлт ..
            </p>
          </div>
          <div
            className="card-footer"
            style={{ color: "blue", textAlign: "right", cursor: "pointer" }}
            onClick={navigateToCellGroups}
          >
            <small>Дэлгэрэнгүй ...</small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img
            src={require("../../assets/img/wmc-logo.png")}
            className="card-img-top"
            alt="..."
            style={imageStyle}
          />
          <div className="card-body">
            <h5 className="card-title">Магтаал үйлчлэл</h5>
            <p className="card-text">
              Бид хүндэтгэлийн цуглаан, хүүхдийн цуглаан, залуусын цуглаан,
              өсвөрийн цуглаан, эсийн бүлгүүд, үүрийн залбирал ба шөнийн
              залбиралуудад тогтмол үйлчилж байна.
            </p>
          </div>
          <div
            className="card-footer"
            style={{ color: "blue", textAlign: "right", cursor: "pointer" }}
            onClick={navigateToMagtaal}
          >
            <small>Дэлгэрэнгүй ...</small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img
            src={require("../../assets/img/guys.png")}
            className="card-img-top"
            alt="..."
            style={imageStyle}
          />
          <div className="card-body">
            <h5 className="card-title">Залуучуудын үйлчлэл</h5>
            <p className="card-text">
              Залуусын цуглаанд 20 наснаас 35 нас хүртэлх залуус хамрагддаг ба
              Лхагва гараг бүр орой 19:00 цагт болдог
            </p>
          </div>
          <div
            className="card-footer"
            style={{ color: "blue", textAlign: "right", cursor: "pointer" }}
            onClick={navigateToZaluus}
          >
            <small>Дэлгэрэнгүй ...</small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img
            src={require("../../assets/img/young.jpg")}
            className="card-img-top"
            alt="..."
            style={imageStyle}
          />
          <div className="card-body">
            <h5 className="card-title">Хүүхдийн үйлчлэл</h5>
            <p className="card-text">
              Бурханы үгийн сонсож түүнийн танин мэдэхийг хүсвэл Бүтэн сайн
              өдрийн 2pm цагт үргэлж нээлттэй ...
            </p>
          </div>
          <div
            className="card-footer"
            style={{ color: "blue", textAlign: "right", cursor: "pointer" }}
            onClick={navigateToDetail}
          >
            <small>Дэлгэрэнгүй ...</small>
          </div>
        </div>
      </div>
    </div>
  );
}
