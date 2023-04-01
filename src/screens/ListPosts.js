import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Post from "../components/post/Post";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBInputGroup,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Announcement from "../components/moderator/Announcement";
import WeeklyAnnouncement from "../components/moderator/WeeklyAnnouncement";

export default function ListPosts() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate(`/home`);
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      let result = await axios.get(`/posts`);
      let filtered = result.data.filter(
        (p) => parseInt(p.deadline) >= Date.now()
      );
      const reversed = filtered.reverse();
      setPosts(reversed);
    })();
  }, []);

  const id = localStorage.getItem("idToken");
  const token = localStorage.getItem("SavedToken");
  const infoToken = jwt_decode(token);

  function addpost() {
    navigate(`/addpost`);
  }
  return (
    <div className="d-grid gap-2  mx-auto" style={{ margin: "5px" }}>
      <MDBNavbar light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand>
            {" "}
            <img
              src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/274369433_4372302672871342_1364061837207403963_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WYFSejGSmysAX8hKLUd&_nc_ht=scontent-atl3-2.xx&oh=00_AfB-tHS_-VoI3Jt3FRzTFIgtoXNAuHTBV-rKD1o0Q2v3-g&oe=63D0B927"
              className="img-fluid rounded-pill"
              alt=""
              style={{ width: "50px" }}
            />{" "}
            W.M.C
          </MDBNavbarBrand>
          <span style={{ color: "brown" }}>
            {infoToken.fullname.toUpperCase()} танд энэ өдрийн мэнд хүргэе.
          </span>
          <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
            <input
              className="form-control"
              placeholder="Залбирлын сэдэв хайх ..."
              aria-label="Search"
              type="Search"
            />
            <MDBBtn outline>Болих</MDBBtn>
            <MDBBtn outline color="warning" onClick={logout}>
              Гарах
            </MDBBtn>
          </MDBInputGroup>
        </MDBContainer>
      </MDBNavbar>
      <div
        style={{
          marginLeft: "10%",
          width: "80%",
        }}
      >
        <WeeklyAnnouncement />
        <br />
        <MDBBtn
          onClick={addpost}
          outline
          style={{
            width: "100%",
          }}
        >
          Залбирлын сэдэв оруулах бол энд дарна уу.
        </MDBBtn>

        <MDBRow className="row-cols-1 row-cols-md-2 g-4">
          <Post posts={posts} id={id} />
        </MDBRow>
      </div>
    </div>
  );
}
