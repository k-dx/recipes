import Recipe from "./Recipe";
import { useRecipe } from "../providers/RecipeProvider/useRecipe";

export default function RecipeList() {
  const { filters, recipes } = useRecipe();
  return (
    <div>
      <h1>Recipes</h1>
      {recipes
        .filter((recipe) => !filters.favorite || recipe.favorite)
        .filter(
          (recipe) =>
            recipe.name.toLowerCase().includes(filters.search.toLowerCase()) ||
            recipe.description
              .toLowerCase()
              .includes(filters.search.toLowerCase()) ||
            recipe.ingredients
              .join(" ")
              .toLowerCase()
              .includes(filters.search.toLowerCase())
        )
        .map((recipe) => (
          <Recipe key={recipe.id} {...recipe} />
        ))}
    </div>
  );
}
