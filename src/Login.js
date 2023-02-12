import React, { useState, useContext } from "react";
import { LoginContext } from "./Contexts/LoginContext";

function Login() {
  const { setUserName, setShowProfile } = useContext(LoginContext);

  return (
    <>
      <input
        type="text"
        placeholder="Username..."
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <input type="text" placeholder="Password..." />
      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        LOGIN
      </button>
    </>
  );
}

export default Login;
