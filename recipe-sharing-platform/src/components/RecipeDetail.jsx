import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
        fetch('./data.json')
        .then((response) => response.json())
        .then((data) => {
            const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
            setRecipe(selectedRecipe);
        });
    }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4" />
      <p className="text-gray-600">{recipe.summary}</p>
    </div>
  );
};

export default RecipeDetail;
