import React, { useState, useEffect } from "react";
import "./Messenger.css";
import db from "./firebase";
import firebase from "firebase";

function Messenger({ username }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  const handleClick = () => {
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="messenger">
      <div className="messages__container">
        {messages.map(({ id, message }) => (
          <div
            key={id}
            className={`message ${
              username === message.username && "message__users"
            }`}
          >
            <div>
              <h2>
                {username === message.username
                  ? ""
                  : `${message.username || "Unknown"} :`}
                {message.message}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <div>
        <form className="messenger__input">
          <input
            className="inputText"
            placeholder="Enter a messagge...."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            disabled={!input}
            className="btn"
            onClick={handleClick}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Messenger;
