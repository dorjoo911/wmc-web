import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBPopover,
  MDBPopoverHeader,
  MDBPopoverBody,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
  MDBBadge,
  MDBIcon,
  MDBInput,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import axios from "axios";

import PostHeader from "./PostHeader";
import PostFooterHeader from "./PostFooterHeader";
import PostFooterBody from "./PostFooterBody";
import PostFooterComment from "./PostFooterComment";

export default function Post({ posts, id }) {
  const token = localStorage.getItem("SavedToken");
  const infoToken = jwt_decode(token);
  // const [comment, setcomment] = useState("");
  // const [toggle, settoggle] = useState(true);

  const deletePost = async (id) => {
    await axios.delete(`/posts/${id}`);
    window.location.reload();
  };

  // const commentout = async (id) => {
  //   await axios.put(`/posts/${id}`, {
  //     userId: infoToken.id,
  //     userName: infoToken.fullname,
  //     comment: comment,
  //     date: Date.now().toString(),
  //   });
  //   window.location.reload();
  // };

  // const close = () => {
  //   settoggle(false);
  // };
  // const open = () => {
  //   settoggle(true);
  // };
  const pray = async (id) => {
    axios.put(`/posts/${id}`, {
      userId: infoToken.id,
      userName: infoToken.fullname,
      date: Date.now().toString(),
    });
    // window.location.reload();
  };
  return (
    <>
      {posts.map((post) => (
        <MDBCol key={post._id}>
          <MDBCard alignment="center">
            <PostHeader post={post} />
            <MDBCardBody>
              <MDBCardTitle>{post.title}</MDBCardTitle>
              <MDBPopover
                color="secondary"
                btnChildren="Дэлгэнгүйг унших"
                placement="top"
              >
                <MDBPopoverHeader>{post.title}</MDBPopoverHeader>
                <MDBPopoverBody>{post.description}</MDBPopoverBody>
              </MDBPopover>
              <MDBBtn
                href="#"
                outline
                color="success"
                onClick={() => {
                  pray(post._id);
                }}
              >
                залбиралд нэгдэх
              </MDBBtn>
            </MDBCardBody>
            <MDBCardFooter
              className="text-muted"
              style={{ textAlign: "right" }}
            >
              <MDBCard
                shadow="0"
                border="info"
                background="white"
                className="mb-3"
                style={{ textAlign: "left", height: "200px" }}
              >
                <PostFooterHeader />
                <PostFooterBody post={post} />
              </MDBCard>
              <PostFooterComment post={post} />
              <label style={{ color: "blue" }}>Дуусах огноо: </label>
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              }).format(post.deadline)}{" "}
              {/* <MDBPopover outline btnChildren="Сэтгэгдэл бичих" onClick={open}>
              {toggle ? (
                <>
                  <MDBPopoverBody>
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Сэтгэгдэл ..."
                      id="form2"
                      type="text"
                      placeholder="your text here:"
                      value={comment}
                      onChange={(e) => setcomment(e.target.value)}
                    />
                  </MDBPopoverBody>
                  <MDBPopoverHeader>
                    <MDBBtn
                      onClick={() => {
                        commentout(post._id);
                      }}
                      outline
                      color="success"
                      className="mx-2"
                    >
                      Оруулах
                    </MDBBtn>
                    <MDBBtn
                      onClick={close}
                      outline
                      color="danger"
                      className="mx-2"
                    >
                      Цуцлах
                    </MDBBtn>
                  </MDBPopoverHeader>
                </>
              ) : null}
            </MDBPopover> */}
              {post.userId === id ? (
                <MDBBtn
                  onClick={() => {
                    deletePost(post._id);
                  }}
                  outline
                  color="danger"
                >
                  Устгах
                </MDBBtn>
              ) : null}
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      ))}
    </>
  );
}
