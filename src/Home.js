import React from "react";
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

const Home = () => {
  return (
    <div style={{ textAlign: "center", margin: "5px" }}>
      <NavBarCus />
      <MDBCarousel showControls showIndicators>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/277442416_4459071994194409_8565933829294993435_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=2v-4hsOYh58AX_lapJ2&_nc_ht=scontent-atl3-2.xx&oh=00_AfDLIJ8CLSDApjrmw3PLa3aeCmIF5KpJy4qdNU9qlj-vzg&oe=63D233DF"
          alt="..."
        >
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselItem>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/241745973_3846242382144043_5555693040545901093_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=rV6v4R4ncB0AX-IQ3Gw&_nc_ht=scontent-atl3-2.xx&oh=00_AfDpE0oQrPQcM68Ga3WSKLoumxodxK__GGywHqcwODERVQ&oe=63D11E01"
          alt="..."
        >
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselItem>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/277512116_4464251460343129_5416994464829105617_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=2DVhQFVIDo4AX9tV_FV&_nc_ht=scontent-atl3-2.xx&oh=00_AfBvX05w_MpYFb-lW-eHaX4zBiWJYkDvLyW-tbDc3YkQ1A&oe=63D268AD"
          alt="..."
        >
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
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
                src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/244981360_3917831781651769_2998775317622210632_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=LSmLTZelMNMAX9O9TGY&_nc_ht=scontent-atl3-2.xx&oh=00_AfDk31NHuX4WEgBqr2woJ6ReoJwf7b_XbFqN2HQTGPkcSA&oe=63D0DD39"
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
                src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/276281258_4459073410860934_4216192586414436511_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=3mXyQPqv_SgAX9wrusr&tn=s_dMePxR3gUoFPxe&_nc_ht=scontent-atl3-2.xx&oh=00_AfAaJ5RUc8-mpSgWzCif9Cv-kqsv9Pn8P8KwrGN_GtZfiA&oe=63D08911"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Магтаалын үйлчлэл</MDBCardTitle>
                <MDBCardText>
                  Бурханыг хамтдаа магтацгаая. WMC нь магтаалын 3 багтай бөгөөд.
                  Хөгжимдөөд зохиогоод дуулаад ...
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <MDBBtn href="#" outline color="success">
                  Магтаалд үйлчлэх
                </MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                style={{ width: "100%", height: "60%", objectFit: "cover" }}
                src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/277003262_4459072410861034_8888791544468454998_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=B4qSPOa5D0AAX-u046i&_nc_ht=scontent-atl3-2.xx&oh=00_AfDFvDgM-ETdq8ocCD8x-WC3fmyXWwAbJ3qMraui9d0xgQ&oe=63D1E714"
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
                src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/276997201_4459071034194505_1187073774819982611_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=g6Z2UlF8uvkAX-AJXcD&_nc_ht=scontent-atl3-2.xx&oh=00_AfB8456lXErpMvwrbpkj2hohHBmD0CxUXBmFxSnSXbWJ9Q&oe=63D0E21D"
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
                src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/278011964_4485757841525824_6653069297248429454_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=dtZM1AGFsKsAX__7Apv&tn=s_dMePxR3gUoFPxe&_nc_ht=scontent-atl3-2.xx&oh=00_AfCf5qomR_TY5Z_sUL9_kS9JhNvKcP8MODYLltA7a1ytJQ&oe=63D17B37"
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
                src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/277177859_4459071910861084_8197049579622021811_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=axod_8b__xAAX-xf8fr&_nc_ht=scontent-atl3-2.xx&oh=00_AfCVfGvRP84RuElyjnedILTpwJfLVIyKfCdViYL8Lwz52Q&oe=63D2F091"
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
