import { createContext, useReducer } from "react";
import { IRecipe } from "../../types/IRecipe.type.ts";
import { recipeReducer } from "./recipeReducer.ts";

const initialRecipes: IRecipe[] = [
  {
    id: 1,
    name: "Spaghetti",
    ingredients: ["pasta", "tomato sauce", "garlic", "onion", "ground beef"],
    favorite: true,
    description:
      "Spaghetti is a long, thin, solid, cylindrical pasta. It is a staple food of traditional Italian cuisine. Like other pasta, spaghetti is made of milled wheat and water and sometimes enriched with vitamins and minerals. Authentic Italian spaghetti is made from durum wheat semolina, but elsewhere it may be made with other kinds of flour.",
  },
  {
    id: 2,
    name: "Milkshake",
    ingredients: ["milk", "vanilla ice cream", "sugar"],
    favorite: false,
    description:
      "A milk shake is a sweet, cold beverage that is usually made from milk, ice cream, or iced milk, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, or fruit syrup.",
  },
];

export const RecipeContext = createContext<{
  recipes: IRecipe[];
  removeRecipe: (id: number) => void;
  toggleFavorite: (id: number) => void;
}>({
  recipes: initialRecipes,
  removeRecipe: () => {},
  toggleFavorite: () => {},
});

export default function RecipeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [recipes, dispatch] = useReducer(recipeReducer, initialRecipes);

  function removeRecipe(id: number) {
    dispatch({ type: "DELETE_RECIPE", payload: id });
  }

  function toggleFavorite(id: number) {
    dispatch({ type: "TOGGLE_FAVORITE", payload: id });
  }

  return (
    <RecipeContext.Provider value={{ recipes, removeRecipe, toggleFavorite }}>
      {children}
    </RecipeContext.Provider>
  );
}
