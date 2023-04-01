import React, { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default function AddAnnouncement({
  editingTextId,
  editingText,
  setEditingText,
  onUpdate,
}) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const token = localStorage.getItem("SavedToken");
  const infoToken = jwt_decode(token);

  const isEditing = editingTextId && editingText;

  // If it's a PUT request, use `editingText` as the value of the input field
  // If it's a POST request, use `text` as the value of the input field
  const inputValue = isEditing ? editingText : text;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        const response = await axios.put(`/announces/${editingTextId}`, {
          userName: infoToken.fullname,
          userId: infoToken.id,
          text: inputValue,
        });
        console.log(response.data);
        setEditingText("");
      } else {
        const response = await axios.post("/announces", {
          userName: infoToken.fullname,
          userId: infoToken.id,
          text: inputValue,
        });

        setText("");
        onUpdate();
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        setError(error.response.data.message || "Error posting announcement");
      } else {
        setError("Error posting announcement");
      }
    }
  };

  return (
    <div>
      {infoToken.role === "moderator" || infoToken.role === "admin" ? (
        <>
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter announcement text"
              value={inputValue}
              onChange={(e) =>
                isEditing
                  ? setEditingText(e.target.value)
                  : setText(e.target.value)
              }
            />
            <button
              style={{ backgroundColor: isEditing ? "green" : "red" }}
              type="submit"
            >
              {isEditing ? "Засах" : "Оруулах"}
            </button>
          </form>
        </>
      ) : null}
    </div>
  );
}
