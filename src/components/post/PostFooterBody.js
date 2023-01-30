import React from "react";
import Review from "../Review";
import { MDBCardBody, MDBCardTitle, MDBCardText } from "mdb-react-ui-kit";
export default function PostFooterBody({ post }) {
  return (
    <MDBCardBody style={myComponent1}>
      <MDBCardTitle></MDBCardTitle>
      <MDBCardText style={myComponent2}>
        <Review reviews={post.review} />
      </MDBCardText>
    </MDBCardBody>
  );
}
const myComponent1 = {
  height: "100%",
  width: "100%",
  overflow: "hidden",
};
const myComponent2 = {
  height: "100%",
  width: "100%",
  overflow: "auto",
  paddingRight: "20px",
};
