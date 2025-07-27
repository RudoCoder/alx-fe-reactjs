import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id)
    })),
  addToFavorites: (recipe) =>
    set((state) => {
      if (!state.favorites.find((r) => r.id === recipe.id)) {
        return { favorites: [...state.favorites, recipe] };
      }
      return state;
    }),
  removeFromFavorites: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((r) => r.id !== id)
    }))
}));
