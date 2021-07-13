import axios from 'axios';
import React, { useState } from 'react';
import './Form.css';
import './Button.css';

export default function Form({ setRecipe }) {
  const [input, setInput] = useState('');

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?tags=${input}&number=10&apiKey=${process.env.REACT_APP_API_KEY_SPOONACULAR}`
    );
    setRecipe(response.data.recipes);
  }

  const handleClick = e => {
    setInput(e.target.getAttribute('data-food'));
  };

  return (
    <div id="searchContainer">
      <form id="form" onSubmit={handleFormSubmit}>
        <div className="searchLabel">
          <label>
            <h2>Click for a random recipe list!</h2>
            <h4>Or Search if you're feeling adventurous!</h4>
          </label>
        </div>
        <div className="form__buttons">
          <button
            onClick={handleClick}
            data-food="chicken"
            className="btn btn-large form-btn"
          >
            Chicken
          </button>
          <button
            onClick={handleClick}
            data-food="beef"
            className="btn btn-large form-btn"
          >
            Beef
          </button>
          <button
            onClick={handleClick}
            data-food="pork"
            className="btn btn-large form-btn"
          >
            Pork
          </button>
          <button
            onClick={handleClick}
            data-food="fish"
            className="btn btn-large form-btn"
          >
            Fish
          </button>
          <button
            onClick={handleClick}
            data-food="soup"
            className="btn btn-large form-btn"
          >
            Soup
          </button>
          <button
            onClick={handleClick}
            data-food="vegan"
            className="btn btn-large form-btn"
          >
            vegan
          </button>
        </div>
        <input
          onChange={handleInputChange}
          type="search"
          name="search"
          placeholder="Ingredient"
          className="searchInput"
        />
      </form>
    </div>
  );
}
