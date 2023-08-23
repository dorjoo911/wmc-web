// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   MDBContainer,
//   MDBIcon,
//   MDBBtn,
//   MDBCarousel,
//   MDBCarouselItem,
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBTypography,
//   MDBCardHeader,
//   MDBFooter,
//   MDBRow,
//   MDBCol,
//   MDBInput,
//   MDBCardFooter,
// } from "mdb-react-ui-kit";
// export default function Footer() {
//   const navigate = useNavigate();
//   return (
//     <MDBFooter className="text-center" color="white" bgColor="dark">
//       <MDBContainer className="p-4">
//         <section className="mb-4">
//           <MDBBtn
//             outline
//             color="light"
//             floating
//             className="m-1"
//             href="https://www.facebook.com/WashingtonMongolianChurch"
//             role="button"
//           >
//             <MDBIcon fab icon="facebook-f" />
//           </MDBBtn>

//           <MDBBtn
//             outline
//             color="light"
//             floating
//             className="m-1"
//             href="#!"
//             role="button"
//           >
//             <MDBIcon fab icon="twitter" />
//           </MDBBtn>

//           <MDBBtn
//             outline
//             color="light"
//             floating
//             className="m-1"
//             href="https://www.google.com/maps/place/Washington+Mongolian+Church/@38.8551968,-77.1259477,17z/data=!3m1!4b1!4m5!3m4!1s0x89b7b6c6e3128487:0x2aeeaef2e4842545!8m2!3d38.8550952!4d-77.1238393"
//             role="button"
//           >
//             <MDBIcon fas icon="map-marker-alt" />
//           </MDBBtn>

//           <MDBBtn
//             outline
//             color="light"
//             floating
//             className="m-1"
//             href="#!"
//             role="button"
//           >
//             <MDBIcon fab icon="instagram" />
//           </MDBBtn>
//         </section>

//         <section className="">
//           <form action="">
//             <MDBRow className="d-flex justify-content-center">
//               <MDBCol size="auto">
//                 <p className="pt-2">
//                   <strong>
//                     Мэдээлэл хүлээн авахыг хүсвэл хаягаа бүртгүүлээрэй
//                   </strong>
//                 </p>
//               </MDBCol>

//               <MDBCol md="5" start>
//                 <MDBInput
//                   contrast
//                   type="email"
//                   label="Email хаяг"
//                   className="mb-4"
//                 />
//               </MDBCol>

//               <MDBCol size="auto">
//                 <MDBBtn outline color="light" type="submit" className="mb-4">
//                   Бүртгүүлэх
//                 </MDBBtn>
//               </MDBCol>
//             </MDBRow>
//           </form>
//         </section>

//         <section className="mb-4">
//           <p></p>
//         </section>

//         <section className="">
//           <MDBRow>
//             <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
//               <h5 className="text-uppercase">Холбоос</h5>

//               <ul className="list-unstyled mb-0">
//                 <li>
//                   <a href="#!" className="text-white">
//                     Бидний тухай
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#!" className="text-white">
//                     Хүндэтгэлийн чуулган
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#!" className="text-white">
//                     Хүүхдийн цуглаан
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#!" className="text-white">
//                     Залуучуудын цуглаан
//                   </a>
//                 </li>
//               </ul>
//             </MDBCol>

//             <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
//               <h5 className="text-uppercase">Холбоос</h5>

//               <ul className="list-unstyled mb-0">
//                 <li>
//                   <a href="#!" className="text-white">
//                     Зуны камп
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#!" className="text-white">
//                     Өвлийн камп
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#!" className="text-white">
//                     Наадам
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#!" className="text-white">
//                     Шинэ жил
//                   </a>
//                 </li>
//               </ul>
//             </MDBCol>

//             <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
//               <h5 className="text-uppercase">Холбоос</h5>

//               <ul className="list-unstyled mb-0">
//                 <li>
//                   <a href="#!" className="text-white">
//                     Магтаал
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#!" className="text-white">
//                     Библи сургууль
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#!" className="text-white">
//                     Шөнийн залбирал
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#!" className="text-white">
//                     Тээврийн хэрэгсэл
//                   </a>
//                 </li>
//               </ul>
//             </MDBCol>

//             <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
//               <h5 className="text-uppercase">Холбоос</h5>

//               <ul className="list-unstyled mb-0">
//                 <li>
//                   <a href="#!" className="text-white">
//                     Ажлын байр
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#!" className="text-white">
//                     Тусламж
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#!" className="text-white">
//                     Нэгдсэн цуглаан
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#!" className="text-white">
//                     Бусад
//                   </a>
//                 </li>
//               </ul>
//             </MDBCol>
//           </MDBRow>
//         </section>
//       </MDBContainer>

//       <div
//         className="text-center p-3"
//         style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
//       >
//         © 2023 Copyright: Washington Mongolian Church,{" "}
//         <a className="text-white" href="https://mikeportfolio.click">
//           Developed by Mike Erdene
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="text-center text-white bg-dark">
      <div className="container p-4">
        <section className="mb-4">
          <a
            href="https://www.facebook.com/WashingtonMongolianChurch"
            className="btn btn-light m-1"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a href="#!" className="btn btn-light m-1" role="button">
            <i className="fab fa-twitter"></i>
          </a>

          <a
            href="https://www.google.com/maps/place/Washington+Mongolian+Church/@38.8551968,-77.1259477,17z/data=!3m1!4b1!4m5!3m4!1s0x89b7b6c6e3128487:0x2aeeaef2e4842545!8m2!3d38.8550952!4d-77.1238393"
            className="btn btn-light m-1"
            role="button"
          >
            <i className="fas fa-map-marker-alt"></i>
          </a>

          <a href="#!" className="btn btn-light m-1" role="button">
            <i className="fab fa-instagram"></i>
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
