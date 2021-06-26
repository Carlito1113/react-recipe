import React from 'react';
import './Recipe.css';
import axios from "axios"

export default function Recipes({ recipes }) {

  async function saveRecipe(recipe) {
    const newRecipe = {
      title: recipe.title,
      image: recipe.image,
      preparationMinutes: recipe.preparationMinutes,
      readyInMinutes: recipe.readyInMinutes,
      servings: recipe.servings,
      sourceUrl: recipe.sourceUrl,
      summary: recipe.summary
    }

    await axios.post("http://localhost:3001/api/recipebook", newRecipe)
    
  }

  return (
    <div className="RecipesContainer">
      {recipes.map((recipe, recipeIdx) => {
        return (
          <>
            {recipeIdx <= 5 ? (
              <div key={recipeIdx} className="RecipeCard">
                <img
                  className="CardImage"
                  src={recipe.image}
                  alt="recipe stuff"
                />
                <h3>{recipe.title}</h3>
                <p>Ready in: {recipe.readyInMinutes} minutes</p>
                <p>Serves: {recipe.servings}</p>
                <a rel="noreferrer" target='_blank' href={recipe.sourceUrl}> Link to Recipe </a>
                <button onClick={() => saveRecipe(recipe)}>SAVE recipe</button>
              </div>
            ) : null}
          </>
        );
      })}
    </div>
  );
}
