import { useContext } from "react";
import Recipe from "./Recipe";
import { RecipeContext } from "../providers/RecipeProvider/RecipeProvider";

export default function RecipeList() {
  const { recipes } = useContext(RecipeContext);
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}
