import React from "react";
import Navigation from "../components/general/Navigation";
import Footer from "../components/general/Footer";

export default function CellGroups() {
  return (
    <div>
      <Navigation />
      <div
        style={{
          backgroundColor: "#f7f7f7", // Smoother gray background
          borderRadius: "5px",
          padding: "20px",
          width: "80%",
          margin: "10px auto",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", // Shadow effect
        }}
      >
        <table className="table table-striped table-hover border-0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Цуглах газар</th>
              <th scope="col">Ахлагч</th>
              <th scope="col">Туслагч</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mongol town</td>
              <td>Г.Алтанцоож</td>
              <td>Г.Мөнхбаяр</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Gainesville</td>
              <td>А.Ханна</td>
              <td>Б.Төрболд</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Courthouse</td>
              <td>Б.Батбаатар</td>
              <td>О.Энхмаа</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Langston</td>
              <td>Г.Энхзул</td>
              <td>Ч.Оргил</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Fountain</td>
              <td>С.Дулмаа</td>
              <td>Э.Дөлгөөн</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Tysons corner</td>
              <td>Б.Болормаа</td>
              <td>С.Пүүжээ</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Centerville</td>
              <td>Б.Сайнбаяр</td>
              <td>Б.Буянжаргал</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Wellington</td>
              <td>Д.Элбэгзаяа</td>
              <td>Б.Баяржаргал</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Queen</td>
              <td>Д.Гэрэлмаа</td>
              <td>С.Адъяасүрэн</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Fairfax</td>
              <td>Д.Одончимэг</td>
              <td>Б.Цолмон</td>
            </tr>
            <tr>
              <th scope="row">11</th>
              <td>Springfield</td>
              <td>О.Батхишиг</td>
              <td>Л.Батбаяр</td>
            </tr>
            <tr>
              <th scope="row">12</th>
              <td>5550 CP</td>
              <td>Я.Гантуяа</td>
              <td>Б.Алтансувд</td>
            </tr>
            <tr>
              <th scope="row">13</th>
              <td>Lakeside Plaza</td>
              <td>Н.Бат</td>
              <td>Э.Наранчимэг</td>
            </tr>
            <tr>
              <th scope="row">14</th>
              <td>Oak Apartment</td>
              <td>Ж.Ариунжаргал</td>
              <td>А.Ганзориг</td>
            </tr>
            <tr>
              <th scope="row">15</th>
              <td>Chantilly</td>
              <td>Ц.Гантулга</td>
              <td>Х.Одгэрэл</td>
            </tr>
          </tbody>
        </table>
        <strong>
          "Эсийн бүлэг" цуглаантай холбоотой асуулт байвал Баясаа: 703-582-4929
          холбогдоно уу.
        </strong>
      </div>
      <Footer />
    </div>
  );
}
