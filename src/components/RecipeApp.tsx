import { useState } from "react";
import AddRecipe from "./AddRecipe";
import Filters from "./Filters";
import RecipeList from "./RecipeList";

export default function RecipeApp() {
  const [addRecipe, setAddRecipe] = useState(false);

  return (
    <div className="max-w-2xl mx-auto">
      {addRecipe ? (
        <AddRecipe addRecipe={() => setAddRecipe(!addRecipe)} />
      ) : (
        <>
          <Filters className="mb-6" />
          <RecipeList addRecipe={() => setAddRecipe(!addRecipe)} />
        </>
      )}
    </div>
  );
}
