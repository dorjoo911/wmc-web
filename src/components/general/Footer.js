import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-white bg-dark">
      <div className="container p-4">
        <section className="mb-4">
          <a
            href="https://www.facebook.com/WashingtonMongolianChurch"
            className="btn btn-light m-1"
            role="button"
            style={iconStyles}
          >
            <i className="fab fa-facebook"></i>
          </a>

          <a
            href="https://www.youtube.com/@washingtonmongolianchurch9837"
            className="btn btn-light m-1"
            role="button"
          >
            <i className="fab fa-youtube" style={iconStyles}></i>
          </a>

          <a
            href="https://www.google.com/maps/place/Washington+Mongolian+Church/@38.8551968,-77.1259477,17z/data=!3m1!4b1!4m5!3m4!1s0x89b7b6c6e3128487:0x2aeeaef2e4842545!8m2!3d38.8550952!4d-77.1238393"
            className="btn btn-light m-1"
            role="button"
            style={iconStyles}
          >
            <i className="fas fa-map-marker-alt"></i>
          </a>

          <a
            href="https://www.instagram.com/washington_mongolian_church/?hl=en"
            className="btn btn-light m-1"
            role="button"
          >
            <i className="fab fa-instagram" style={iconStyles}></i>
          </a>
        </section>

        <section className="">
          <form action="">
            <div className="row justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>
                    Мэдээлэл хүлээн авахыг хүсвэл хаягаа бүртгүүлээрэй
                  </strong>
                </p>
              </div>

              <div className="col-md-5">
                <input
                  type="email"
                  className="form-control mb-4"
                  placeholder="Email хаяг"
                />
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-light mb-4">
                  Бүртгүүлэх
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className="mb-4">
          <p></p>
        </section>

        <section className="">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Холбоос</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Бидний тухай
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Хүндэтгэлийн чуулган
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Хүүхдийн цуглаан
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Залуучуудын цуглаан
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Холбоос</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Зуны камп
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Өвлийн камп
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Наадам
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Шинэ жил
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Холбоос</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Магтаал
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Библи сургууль
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Шөнийн залбирал
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Тээврийн хэрэгсэл
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Холбоос</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Ажлын байр
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Тусламж
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Нэгдсэн цуглаан
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Бусад
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright: Washington Mongolian Church,{" "}
        <a className="text-white" href="https://mikeportfolio.click">
          Developed by Mike Erdene
        </a>
      </div>
    </footer>
  );
}
const iconStyles = {
  color: "blue", // Primary color
  transition: "color 0.3s ease", // Transition for smooth hover effect
};
