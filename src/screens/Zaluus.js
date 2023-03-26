import React from "react";
import GalleryZaluus from "../assets/galleryZaluus/GalleryZaluus";
import Footer from "../components/Footer";
import NavBarCus from "../components/NavBarCus";
import { MDBAccordion, MDBAccordionItem, MDBIcon } from "mdb-react-ui-kit";

export default function Zaluus() {
  return (
    <>
      <NavBarCus />
      <br />

      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        style={{
          textAlign: "center",
          width: "80%",
          marginLeft: "10%",
        }}
      >
        <div className="card text-center">
          <div className="card-header">Ахлагч - Б.Төрболд</div>
          <div className="card-body">
            <h5 className="card-title">1. Тимот залуу гэр бүлүүд</h5>
            <GalleryZaluus />
            <MDBAccordion initialActive={1}>
              <MDBAccordionItem
                collapseId={2}
                headerTitle={
                  <>
                    <MDBIcon fas icon="male" /> &nbsp; Аав нарын нөхөрлөл
                  </>
                }
              >
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid.
              </MDBAccordionItem>
              <MDBAccordionItem
                collapseId={3}
                headerTitle={
                  <>
                    <MDBIcon fas icon="female" /> &nbsp; Ээж нарын нөхөрлөл
                  </>
                }
              >
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf
              </MDBAccordionItem>
            </MDBAccordion>
          </div>
        </div>
        <div className="card text-center">
          <div className="card-header">Ахлагч - Б.Ууганбаяр</div>
          <div className="card-body">
            <h5 className="card-title">2. Идэр залуус</h5>
            <GalleryZaluus />
            <MDBAccordion initialActive={1}>
              <MDBAccordionItem
                collapseId={2}
                headerTitle={
                  <>
                    <MDBIcon fas icon="church" /> &nbsp; Лхагва гараг цуглаан
                  </>
                }
              >
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid.
              </MDBAccordionItem>
              <MDBAccordionItem
                collapseId={3}
                headerTitle={
                  <>
                    <MDBIcon fas icon="users" /> &nbsp; Бүтэн сайны нөхөрлөл
                  </>
                }
              >
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf
              </MDBAccordionItem>
            </MDBAccordion>
          </div>
        </div>

        <div className="card text-center">
          <div className="card-header">Ахлагч - М.Бат-Эрдэнэ</div>
          <div className="card-body">
            <h5 className="card-title">3. Gen-Z грүп</h5>
            <GalleryZaluus />
          </div>
        </div>

        <div className="card text-center">
          <div className="card-header">Ахлагч - Б.Номин</div>
          <div className="card-body">
            <h5 className="card-title">4. Охидын үйлчлэл</h5>
            <GalleryZaluus />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
