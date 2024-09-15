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
        if (!formData.title || !formData.ingredients || !formData.instructions) {
            alert('Please fill all fields.');
            return;
        }
        // Submit form data logic
        <form onSubmit={handleSubmit} className="container mx-auto p-4">
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Recipe Title</label>
                <input
                type="text"
                name="title"
                className="w-full border-2 p-2"
                required
                />
            </div>
            {/* <!-- Repeat for Ingredients and Instructions --> */}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                Submit Recipe
            </button>
        </form>
        // console.log('New recipe:', formData);
    };

  return (
        <form onSubmit={handleSubmit} className="container mx-auto p-4">
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Recipe Title</label>
                <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border-2 p-2"
                required
                />
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Ingredients</label>
                <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                className="w-full border-2 p-2"
                required
                />
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Instructions</label>
                <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                className="w-full border-2 p-2"
                required
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">Submit Recipe</button>
        </form>
    );
};

export default AddRecipeForm;
