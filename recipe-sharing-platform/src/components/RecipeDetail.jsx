import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();  // Get recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/src/data.json')  // Fetch recipe data
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error('Error fetching recipe:', error));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 shadow">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Cooking Instructions:</h2>
      <p className="mb-4">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
