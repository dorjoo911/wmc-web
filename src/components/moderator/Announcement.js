import React, { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import AddAnnouncement from "./AddAnnouncement";

export default function Announcement({ data }) {
  const [editingText, setEditingText] = useState("");
  const [editingTextId, setEditingTextId] = useState("");
  const [error, setError] = useState("");
  const [version, setVersion] = useState(0);
  const token = localStorage.getItem("SavedToken");
  const infoToken = jwt_decode(token);

  const handleUpdate = () => {
    setVersion(version + 1);
  };

  const handleEdit = (editingText, editingTextId) => {
    setEditingText(editingText);
    setEditingTextId(editingTextId);
  };

  const handleDeleteClick = async (announcementId) => {
    try {
      const response = await axios.put(`/announces/${announcementId}`);
    } catch (error) {
      console.log(error);
      setError("Error deleting announcement");
    }
  };

  return (
    <div>
      <AddAnnouncement
        editingText={editingText}
        setEditingText={setEditingText}
        editingTextId={editingTextId}
        onUpdate={handleUpdate}
      />

      {data && data.zar ? (
        <>
          <ul style={{ textAlign: "left" }}>
            {data.zar.map((obj) => (
              <li key={obj._id}>
                {
                  <>
                    {obj.text}
                    {infoToken.role === "moderator" ||
                    infoToken.role === "admin" ? (
                      <>
                        {" "}
                        <label onClick={() => handleEdit(obj.text, obj._id)}>
                          &#x1F564;
                        </label>{" "}
                        <label onClick={() => handleDeleteClick(obj._id)}>
                          &#10060;
                        </label>
                      </>
                    ) : null}
                  </>
                }
              </li>
            ))}
          </ul>
          <p style={{ textAlign: "right", color: "green" }}>
            модератор: {data.userName}.
          </p>
        </>
      ) : (
        <div>Энэ долоо хоногийн зарлал мэдээлэл ороогүй байна</div>
      )}
    </div>
  );
}
