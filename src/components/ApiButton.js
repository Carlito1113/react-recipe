import React from 'react';
import axios from 'axios';

export default function ApiButton() {
  async function callApi() {
    try {
      const recipe = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=${process.env.REACT_APP_API_KEY_SPOONACULAR}`
      );
      console.log(recipe)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <button onClick={callApi}>Call API</button>
    </div>
  );
}
