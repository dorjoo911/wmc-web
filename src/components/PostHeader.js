import React from "react";
import { MDBCardHeader, MDBBtn, MDBBadge, MDBIcon } from "mdb-react-ui-kit";
export default function PostHeader({ post }) {
  return (
    <MDBCardHeader
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "#cce6ff",
      }}
    >
      <MDBBtn outline>
        <MDBIcon fas icon="cross" /> залбиралд нэгдсэн:
        <MDBBadge className="ms-2" color="danger">
          {post.prayers.length ? post.prayers.length : 0}
        </MDBBadge>
      </MDBBtn>
      Оруулсан: {post.userName}
    </MDBCardHeader>
  );
}
