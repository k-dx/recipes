import Recipe from "./Recipe";
import { useRecipe } from "../providers/RecipeProvider/useRecipe";

export default function RecipeList() {
  const { recipes } = useRecipe();
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}
