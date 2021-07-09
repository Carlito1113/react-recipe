import { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import Form from './Form';
import LandingPage from './LandingPage';

export default function RecipesComponent({ history }) {
  const [recipes, setRecipe] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth-token')) {
      setIsLoggedIn(true);
    }
  }, [history]);

  console.log(isLoggedIn);

  return (
    <div>
      <LandingPage />
      <Form setRecipe={setRecipe} />
      <RecipeCard isLoggedIn={isLoggedIn} recipes={recipes} />
    </div>
  );
}
