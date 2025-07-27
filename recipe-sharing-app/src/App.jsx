import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useRecipeStore } from './components/recipeStore';

function App() {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    const initialRecipes = [
      { id: 1, title: 'Pasta Carbonara', description: 'A classic Italian pasta dish with eggs, hard cheese, cured pork, and black pepper. It is simple yet incredibly flavorful, perfect for a quick dinner.', ingredients: ['spaghetti', 'eggs', 'pecorino romano', 'guanciale', 'black pepper'] },
      { id: 2, title: 'Chicken Curry', description: 'A fragrant and spicy chicken curry with coconut milk and various spices like turmeric, cumin, and coriander. Best served with rice or naan bread.', ingredients: ['chicken', 'coconut milk', 'curry powder', 'onion', 'garlic', 'ginger'] },
      { id: 3, title: 'Vegetable Lasagna', description: 'Layers of pasta, rich tomato sauce, creamy béchamel, and a medley of roasted vegetables. A hearty and satisfying vegetarian option.', ingredients: ['lasagna noodles', 'marinara sauce', 'ricotta', 'spinach', 'zucchini', 'eggplant'] },
      { id: 4, title: 'Classic Beef Chili', description: 'A hearty and spicy chili with ground beef, beans, tomatoes, and a blend of chili powders and spices. Perfect for a cold day.', ingredients: ['ground beef', 'kidney beans', 'diced tomatoes', 'chili powder', 'cumin', 'onion', 'jalapeno'] },
      { id: 5, title: 'Lemon Herb Roasted Salmon', description: 'Light and healthy roasted salmon fillets with a vibrant lemon and herb marinade. Quick to prepare and full of flavor.', ingredients: ['salmon fillets', 'lemon', 'dill', 'parsley', 'garlic', 'olive oil', 'asparagus'] },
      { id: 6, title: 'Tomato Basil Soup', description: 'A comforting and flavorful soup made with ripe tomatoes and fresh basil. Perfect for a light lunch.', ingredients: ['tomatoes', 'fresh basil', 'vegetable broth', 'onion', 'garlic'] },
      { id: 7, title: 'Chocolate Chip Cookies', description: 'Classic homemade chocolate chip cookies, soft and chewy with melted chocolate chips. A timeless dessert.', ingredients: ['flour', 'sugar', 'brown sugar', 'butter', 'chocolate chips', 'eggs', 'vanilla extract'] },
    ];
    setRecipes(initialRecipes);
  }, [setRecipes]);

  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '900px', margin: '0 auto', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <nav style={{ marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Link to="/" style={{ marginRight: '20px', textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Home</Link>
            <Link to="/add" style={{ marginRight: '20px', textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Add New Recipe</Link>
            <Link to="/favorites" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>My Favorites</Link>
          </div>
          <Routes>
            <Route path="/" element={<SearchBar />} />
            <Route path="/favorites" element={<SearchBar />} />
            <Route path="/add" element={null} />
            <Route path="/recipe/:recipeId" element={null} />
            <Route path="/edit/:recipeId" element={null} />
          </Routes>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 style={{ textAlign: 'center', color: '#333' }}>Recipe Sharing Application</h1>
                <RecipeList />
                <RecommendationsList />
              </>
            }
          />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="/edit/:recipeId" element={<EditRecipeForm />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="*" element={<h2 style={{ textAlign: 'center', color: '#dc3545' }}>404 Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
