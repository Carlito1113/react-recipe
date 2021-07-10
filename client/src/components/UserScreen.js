import { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserScreen({ history }) {
  const [error, setError] = useState('');
  const [privateData, setPrivateData] = useState();

  useEffect(() => {
    if (!localStorage.getItem('auth-token')) {
      history.push('/login');
    }
    async function getUserRecipes() {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
        },
      };
      const userId = localStorage.getItem('user-id');
      try {
        const { data } = await axios.get(`/api/recipebook/${userId}`, config);
        setPrivateData(data);
      } catch (err) {
        localStorage.removeItem('auth-token');
        console.log(err);
        history.push("/login")
      }
    }
    getUserRecipes();
  }, [history]);

  async function deleteRecipe(recipe) {
    const payload = {
      data: {
        userId: localStorage.getItem('user-id'),
        recipeId: recipe._id,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
      },
    };

    try {
      const { data } = await axios.delete(`/api/recipebook/`, payload);
      const recipeArray = privateData;
      // Find index of deleted recipe
      let index = recipeArray.findIndex(recipe => recipe._id === data);
      setPrivateData(
        privateData.filter((recipe, stateIndex) => stateIndex !== index)
      );
    } catch (err) {
      console.log(err);
      setError(err);
    }
  }

  function Recipes() {
    if (privateData) {
      return (
        <div className="RecipesContainer">
          {privateData.map((recipe, recipeIdx) => {
            return (
              <div key={recipeIdx} className="RecipeCard">
                <img
                  className="CardImage"
                  src={recipe.image}
                  alt="recipe stuff"
                />
                <h3>{recipe.title}</h3>
                <p>Ready in: {recipe.readyInMinutes} minutes</p>
                <p>Serves: {recipe.servings}</p>
                <div className="cardButtonContainer">
                  <a className='flexboxLink' rel="noreferrer" target="_blank" href={recipe.sourceUrl}>
                    Link
                  </a>
                  <button className='btn flexBtn' onClick={() => deleteRecipe(recipe)}>delete</button>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <h1>Get started by saving your favorite recipes here!</h1>;
    }
  }
  return (
    <>
      {error && <span>{error}</span>}
      <Recipes />
    </>
  );
}
