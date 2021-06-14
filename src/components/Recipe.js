import React from 'react';
import './Recipe.css';

export default function Recipes({ recipes }) {
  return (
    <div className="RecipesContainer">
      {recipes.map((recipe, recipeIdx) => {
        console.log('inside loop');
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
              </div>
            ) : null}
          </>
        );
      })}
    </div>
  );
}
