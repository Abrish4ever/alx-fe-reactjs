import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// import recipes from './data.json'

const HomePage = () => {
    const[recipes, setRecipes]= useState([]);

    useEffect(()=> {
        fetch('./src/data.json')
        .then((response)=> response.json())
        .then((data)=> console.log(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  return (
        <div className="container mx-auto p-4 rounded">
            <h1 className="text-2xl font-bold text-center mb-8">Recipes Sharing Plateform</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {recipes.map((recipe)=> (
                    <div key={recipe.id} className="card bg-white p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover mb-4" />
                        <h2 className="text-xl font-bold">{recipe.title}</h2>
                        <p className="text-gray-600">{recipe.summary}</p>
                        <link rel="recipe" href={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline mt-2 inline-block">View Recipe</a>
                    </div>
                ))}
            </div>
        </div>
   );
};

export default HomePage