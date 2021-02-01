import React, { useEffect, useState } from "react";
import "./App.css";
import Messenger from "./Messenger";

function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Enter your Name"));
  }, []);
  return (
    <div className="app">
      <div className="app__header">
        <div className="app__container">
          <img
            className="app__logo"
            src="https://lh3.googleusercontent.com/rkBi-WHAI-dzkAIYjGBSMUToUoi6SWKoy9Fu7QybFb6KVOJweb51NNzokTtjod__MzA=s180"
            alt=""
          />
        </div>
        <p>Welcome {username}</p>
      </div>
      <Messenger username={username} />
    </div>
  );
}

export default App;
