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
                <div className='RecipeCard'>
                  <img className="CardImage" src={recipe.image} alt="recipe stuff" />
                  <br></br>
                  <div key={recipeIdx}><h3>{recipe.title}</h3></div>
                  <br></br>
                  <div><p>Ready in: {recipe.readyInMinutes} minutes</p></div>
                  <div><p>Serves: {recipe.servings}</p></div>
                  <div><a href={recipe.sourceUrl}> Link to Recipe </a></div>
                </div>
              ) : null}
            </>
          );
        })}
      </div>
  );
}
