import React from "react";
import GalleryZaluus from "../assets/galleryZaluus/GalleryZaluus";
import Footer from "../components/general/Footer";
import Navigation from "../components/general/Navigation";

export default function Zaluus() {
  return (
    <>
      <Navigation />
      <br />

      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        style={{
          textAlign: "center",
          width: "80%",
          marginLeft: "10%",
        }}
      >
        <div className="col">
          <div className="card">
            <div className="card-header">Ахлагч - Б.Төрболд</div>
            <div className="card-body">
              <h5 className="card-title">1. Тимот залуу гэр бүлүүд</h5>
              <GalleryZaluus />
              <div className="accordion" id="accordion1">
                <div className="card">
                  <div className="card-header" id="heading1">
                    <button
                      className="btn btn-link"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      <i className="bi bi-gender-male"></i> Аав нарын нөхөрлөл
                    </button>
                  </div>
                  <div
                    id="collapse1"
                    className="collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion1"
                  >
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="heading2">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      <i className="bi bi-person-check-fill"></i> &nbsp; Ээж
                      нарын нөхөрлөл
                    </button>
                  </div>
                  <div
                    id="collapse2"
                    className="collapse"
                    aria-labelledby="heading2"
                    data-bs-parent="#accordion1"
                  >
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="card-header">Ахлагч - Б.Ууганбаяр</div>
            <div className="card-body">
              <h5 className="card-title">2. Идэр залуус</h5>
              <GalleryZaluus />
              <div className="accordion" id="accordion2">
                <div className="card">
                  <div className="card-header" id="heading3">
                    <button
                      className="btn btn-link"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="true"
                      aria-controls="collapse3"
                    >
                      <i className="bi bi-church"></i> &nbsp; Лхагва гараг
                      цуглаан
                    </button>
                  </div>
                  <div
                    id="collapse3"
                    className="collapse"
                    aria-labelledby="heading3"
                    data-bs-parent="#accordion2"
                  >
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="heading4">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                      aria-expanded="false"
                      aria-controls="collapse4"
                    >
                      <i className="bi bi-people"></i> &nbsp; Бүтэн сайны
                      нөхөрлөл
                    </button>
                  </div>
                  <div
                    id="collapse4"
                    className="collapse"
                    aria-labelledby="heading4"
                    data-bs-parent="#accordion2"
                  >
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="card-header">Ахлагч - М.Бат-Эрдэнэ</div>
            <div className="card-body">
              <h5 className="card-title">3. Gen-Z грүп</h5>
              <GalleryZaluus />
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="card-header">Ахлагч - Б.Номин</div>
            <div className="card-body">
              <h5 className="card-title">4. Охидын үйлчлэл</h5>
              <GalleryZaluus />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
