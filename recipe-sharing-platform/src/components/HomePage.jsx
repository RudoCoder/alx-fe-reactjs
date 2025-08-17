import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="flex justify-end">
        <Link
          to="/add"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          + Add New Recipe
        </Link>
      </div>

      {recipes.map((recipe) => (
        <div key={recipe.id} className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-2xl font-bold">{recipe.title}</h2>
          <p className="text-gray-600">{recipe.summary}</p>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-48 h-48 object-cover rounded-lg"
          />
          <Link
            to={`/recipe/${recipe.id}`}
            className="text-blue-500 hover:text-blue-600 font-semibold"
          >
            View Recipe
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
