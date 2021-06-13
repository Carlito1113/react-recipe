import axios from 'axios';
import React, { useState } from 'react'

export default function Form({ setRecipe }) {

    const [input, setInput] = useState("")

    function handleInputChange(event) {
        setInput(event.target.value);
    }

    async function handleFormSubmit(event) {
        event.preventDefault()

        const response = await axios.get(
            `https://api.spoonacular.com/recipes/random?tags=${input}&number=10&apiKey=${process.env.REACT_APP_API_KEY_SPOONACULAR}`
        );
        setRecipe(response.data.recipes);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label>Cuisine Type</label>
            <input onChange={handleInputChange} type="text" name="fname" />
            <button>submit</button>
        </form>
    )
}
