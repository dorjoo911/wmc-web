import React from "react";
import Verses from "../general/Verses";
import { MDBCardHeader } from "mdb-react-ui-kit";
export default function PostFooterHeader() {
  return (
    <MDBCardHeader
      style={{
        fontFamily: "Copperplate, Papyrus, fantasy",
        color: "brown",
      }}
    >
      <Verses />
    </MDBCardHeader>
  );
}
