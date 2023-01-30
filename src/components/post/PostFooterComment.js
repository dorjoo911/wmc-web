import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import {
  MDBPopover,
  MDBPopoverHeader,
  MDBPopoverBody,
  MDBInputGroup,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";
export default function PostFooterComment({ post }) {
  const token = localStorage.getItem("SavedToken");
  const infoToken = jwt_decode(token);
  const [comment, setcomment] = useState("");

  const commentout = async (id) => {
    await axios.put(`/posts/${id}`, {
      userId: infoToken.id,
      userName: infoToken.fullname,
      comment: comment,
      date: Date.now().toString(),
    });
    window.location.reload();
  };

  return (
    <>
      <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
        <input
          className="form-control"
          placeholder="Сэтгэгдэл бичих ..."
          aria-label="Search"
          label="Сэтгэгдэл ..."
          id="form2"
          type="text"
          value={comment}
          onChange={(e) => setcomment(e.target.value)}
        />
        <MDBBtn
          onClick={() => {
            commentout(post._id);
          }}
          outline
        >
          Оруулах
        </MDBBtn>
      </MDBInputGroup>
    </>
  );
}
