import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import Form from './Form';

export default function RecipesComponent() {
  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    console.log('this is useeffect');
    console.log(recipes);
  }, [recipes]);

  return (
    <div>
      <Form setRecipe={setRecipe} />
      <RecipeCard recipes={recipes} />
    </div>
  );
}
