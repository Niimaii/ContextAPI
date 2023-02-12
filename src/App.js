import { useState } from "react";
import Login from "./Login";
import { LoginContext } from "./Contexts/LoginContext";

import React from "react";
import Profile from "./Profile";

const App = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUserName] = useState("");

  return (
    <div className="App">
      <LoginContext.Provider value={{ username, setUserName, setShowProfile }}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
};

export default App;
