import { useState, useEffect } from "react";
import axios from "axios";

export default function UserScreen({ history }) {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState();

  useEffect(() => {
    if (!localStorage.getItem("auth-token")) {
      history.push("/login-screen");
    }
    async function fetchPrivateData() {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
        },
      };
      const userId = localStorage.getItem("user-id");
      try {
        const { data } = await axios.get(`/api/recipebook/${userId}`, config);
        console.log(data);
        setPrivateData(data);
      } catch (error) {
        localStorage.removeItem("auth-token");
        console.log(error);
        setError("You are not authorized, please login");
      }
    }
    fetchPrivateData();
  }, [history]);

  function logoutHandler() {
    localStorage.removeItem("auth-token");
    history.push("/login-screen");
  }

  return (
    <>
      {error && <span>{error}</span>}
      <button onClick={logoutHandler}>Logout</button>
      {privateData ? (
        <div className="RecipesContainer">
          {privateData.map((recipe, recipeIdx) => {
            return (
              <>
                <div key={recipeIdx} className="RecipeCard">
                  <img
                    className="CardImage"
                    src={recipe.image}
                    alt="recipe stuff"
                  />
                  <h3>{recipe.title}</h3>
                  <p>Ready in: {recipe.readyInMinutes} minutes</p>
                  <p>Serves: {recipe.servings}</p>
                  <a rel="noreferrer" target="_blank" href={recipe.sourceUrl}>
                    {" "}
                    Link to Recipe{" "}
                  </a>
                </div>
              </>
            );
          })}
        </div>
      ) : null}
    </>
  );
}
