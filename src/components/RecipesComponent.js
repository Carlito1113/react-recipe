import React, { useState } from 'react'
import Recipe from './Recipe'

export default function RecipesComponent() {
  const [recipes, setRecipe] = useState([]) 
  
  return (
    <div>
      <Recipe /> 
    </div>
  )
}
