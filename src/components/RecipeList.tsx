import Recipe from "./Recipe";
import { useRecipe } from "../providers/RecipeProvider/useRecipe";

export default function RecipeList({ addRecipe }: { addRecipe: () => void }) {
  const { filters, recipes } = useRecipe();
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Recipes</h1>
        <button
          onClick={() => addRecipe()}
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Add recipe
        </button>
      </div>
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
