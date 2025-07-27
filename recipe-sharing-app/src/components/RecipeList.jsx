import React from 'react';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
          <p className="text-gray-600">{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
