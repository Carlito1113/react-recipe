import React from 'react'

export default function Recipes({ recipes }) {

  return (
    <div>
      <h1>This is the Recipe Component</h1>
      {recipes.map((recipe, recipeIdx) => {
        console.log("inside loop")
        return (
          <div key={recipeIdx}>{recipe.title}</div>
        )
      })}
    </div>
  )
}
