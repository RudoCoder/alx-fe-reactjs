import RecipeList from './components/RecipeList.jsx';
import AddRecipeForm from './components/AddRecipeForm.jsx';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <hr />
      <RecipeList />
    </div>
  );
}

export default App;
