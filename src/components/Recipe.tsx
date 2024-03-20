import { useRecipe } from "../providers/RecipeProvider/useRecipe";
import { IRecipe } from "../types/IRecipe.type";

export default function Recipe({
  id,
  name,
  favorite,
  ingredients,
  description,
}: IRecipe) {
  const { removeRecipe, toggleFavorite } = useRecipe();

  return (
    <div className="border m-2 p-4 max-w-96">
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <div>
          <h1 className="text-lg font-bold inline mr-2">{name}</h1>
          {!favorite && (
            <input type="checkbox" onChange={() => toggleFavorite(id)} />
          )}
          {favorite && (
            <button
              onClick={() => toggleFavorite(id)}
              className="inline select-none"
            >
              ⭐
            </button>
          )}
        </div>
        <button onClick={() => removeRecipe(id)} className="text-red-500">
          Delete
        </button>
      </div>
      <h2 className="text-sm">{id}</h2>
      <h2>Ingredients</h2>
      <ul className="list-disc ml-4">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>{description}</p>
    </div>
  );
}
