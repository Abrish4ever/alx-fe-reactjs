import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: ''
  });

  const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validation checks
        if (!formData.title || !formData.ingredients || !formData.steps) {
        alert('Please fill in all fields.');
        return;
        }
    
        // Example validation for ingredients
        const ingredientsArray = formData.ingredients.split(',').map(item => item.trim());
        if (ingredientsArray.length < 2) {
        alert('Please provide at least two ingredients.');
        return;
        }
    
        // Handle form submission
        console.log('Submitted Recipe:', formData);
    };

  return (
        <form onSubmit={handleSubmit} className="container mx-auto max-w-lg p-4 bg-white shadow-md rounded">
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Recipe Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded p-2"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Ingredients (comma separated)</label>
                <textarea
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded p-2"
                    rows="5"
                    required
                ></textarea>
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Preparation Steps</label>
                <textarea
                    name="steps"
                    value={formData.steps}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded p-2"
                    rows="5"
                    required
                ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit Recipe
            </button>
        </form>
    );
};

export default AddRecipeForm;
