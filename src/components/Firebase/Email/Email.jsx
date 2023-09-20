import React, { useState } from "react";
import { auth } from "../../../Authentications/firebase/config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Email = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Submit</button>
    </div>
  );
};

export default Email;
