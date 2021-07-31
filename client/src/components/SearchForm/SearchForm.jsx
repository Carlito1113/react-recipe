import axios from 'axios';
import React, { useState } from 'react';
import './SearchForm.scss';
import '../Button.scss';

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
      <form id="search-form" onSubmit={handleFormSubmit}>
        <div className="search-form__label">
          <label>
            <h2>Click for a random recipe list!</h2>
            <h4>Or Search if you're feeling adventurous!</h4>
          </label>
        </div>
        <div className="search-form__buttons">
          <button
            onClick={handleClick}
            data-food="chicken"
            className="button button__large search-form__button"
          >
            Chicken
          </button>
          <button
            onClick={handleClick}
            data-food="beef"
            className="button button__large search-form__button"
          >
            Beef
          </button>
          <button
            onClick={handleClick}
            data-food="pork"
            className="button button__large search-form__button"
          >
            Pork
          </button>
          <button
            onClick={handleClick}
            data-food="fish"
            className="button button__large search-form__button"
          >
            Fish
          </button>
          <button
            onClick={handleClick}
            data-food="soup"
            className="button button__large search-form__button"
          >
            Soup
          </button>
          <button
            onClick={handleClick}
            data-food="vegan"
            className="button button__large search-form__button"
          >
            vegan
          </button>
        </div>
        <input
          onChange={handleInputChange}
          type="search"
          name="search"
          placeholder="Ingredient"
          className="search-form__input"
        />
      </form>
    </div>
  );
}
