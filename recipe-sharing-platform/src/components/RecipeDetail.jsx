import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = data.find((r) => r.id === parseInt(id));
    if (found) setRecipe(found);
  }, [id]);

  if (!recipe) return <p className="text-center mt-6">Recipe not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-64 h-64 object-cover rounded-lg mx-auto"
      />
      <h1 className="text-3xl font-bold">{recipe.title}</h1>
      <p className="text-gray-700">{recipe.summary}</p>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Preparation Steps</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default RecipeDetail;
