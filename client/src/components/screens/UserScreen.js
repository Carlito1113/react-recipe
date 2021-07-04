import { useState, useEffect } from "react";
import axios from "axios";

export default function UserScreen({ history }) {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("auth-token")) {
      history.push("/login-screen");
    }

    async function fetchPrivateData() {
      const config = {
        header: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/recipebook", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("auth-token");
        setError("You are not authorized, please login");
      }

      fetchPrivateData();
    }
  }, [history]);

  function logoutHandler() {
    localStorage.removeItem("auth-token");
    history.push("/login-screen");
  }

  return error ? (
    <span>{error}</span>
  ) : (
    <>
      <div>{privateData}</div>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
}
