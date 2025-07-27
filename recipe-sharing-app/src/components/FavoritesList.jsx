import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2 style={{ color: '#333' }}>All Recipes</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {recipes.map((recipe) => (
          <li key={recipe.id} style={{ marginBottom: '15px', backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3 style={{ margin: '0 0 10px' }}>{recipe.title}</h3>
            <p style={{ marginBottom: '10px', color: '#555' }}>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: '#28a745', fontWeight: 'bold' }}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
