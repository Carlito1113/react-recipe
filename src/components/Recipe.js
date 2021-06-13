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
                <>
                  <img src={recipe.image} alt="recipe stuff" />
                  <div key={recipeIdx}>{recipe.title}</div>
                </>
              ) : null}
            </>
          );
        })}
      </div>
  );
}
