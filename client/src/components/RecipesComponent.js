import { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import SearchForm from './SearchForm/SearchForm';
import LandingPage from '../components/LandingPage/LandingPage';

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
      <SearchForm setRecipe={setRecipe} />
      <RecipeCard isLoggedIn={isLoggedIn} recipes={recipes} />
    </div>
  );
}
