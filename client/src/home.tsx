import React from "react";
import { useMsal } from "@azure/msal-react";

function Home() {
  const { instance } = useMsal();

  const logout = () => {
    instance.logoutRedirect(); 
  };

  return (
    <div>
      <h2>🏠 Home</h2>
      <button onClick={logout}>🚪 Logout</button>
    </div>
  );
}

export default Home;
