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
          margin: "0 auto",
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
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
