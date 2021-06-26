import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import Form from './Form';

export default function RecipesComponent() {
  const [recipes, setRecipe] = useState([]);

  return (
    <div>
      <Form setRecipe={setRecipe} />
      <RecipeCard recipes={recipes} />
    </div>
  );
}
