import React from 'react';
import './RecipeCard.scss';
import axios from 'axios';

export default function Recipes({ recipes, isLoggedIn }) {
  async function saveRecipe(recipe) {
    const newRecipe = {
      title: recipe.title,
      image: recipe.image,
      readyInMinutes: recipe.readyInMinutes,
      servings: recipe.servings,
      sourceUrl: recipe.sourceUrl,
      summary: recipe.summary,
    };
    const request = [newRecipe, localStorage.getItem('user-id')];
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
      },
    };
    await axios.post('/api/recipebook', request, config);
  }

  return (
    <div className="Recipes-Container">
      {recipes.map((recipe, recipeIdx) => {
        return (
          <div key={recipeIdx}>
            {recipeIdx <= 7 ? (
              <div className="Recipes-Container__Card">
                <img
                  className="Recipes-Container__Card--Image"
                  src={recipe.image}
                  alt={recipe.title}
                />
                <h3>{recipe.title}</h3>
                <p>Ready in: {recipe.readyInMinutes} minutes</p>
                <p>Serves: {recipe.servings}</p>
                <div className='cardButtonContainer'>
                  <a className='flexboxLink' rel="noreferrer" target="_blank" href={recipe.sourceUrl}>
                    Link
                  </a>
                  {isLoggedIn && (
                    <button className='flexBtn' onClick={() => saveRecipe(recipe)}>Save</button>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
