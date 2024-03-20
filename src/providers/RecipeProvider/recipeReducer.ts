import { IRecipe } from "../../types/IRecipe.type";

type RecipeAction =
  | { type: "ADD_RECIPE"; payload: IRecipe }
  | { type: "DELETE_RECIPE"; payload: number }
  | { type: "UPDATE_RECIPE"; payload: IRecipe }
  | { type: "TOGGLE_FAVORITE"; payload: number };

export const recipeReducer = (state: IRecipe[], action: RecipeAction) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return [...state, action.payload];
    case "DELETE_RECIPE":
      return state.filter((recipe) => recipe.id !== action.payload);
    case "UPDATE_RECIPE":
      return state.map((recipe) =>
        recipe.id === action.payload.id ? action.payload : recipe
      );
    case "TOGGLE_FAVORITE":
      return state.map((recipe) =>
        recipe.id === action.payload
          ? { ...recipe, favorite: !recipe.favorite }
          : recipe
      );
  }
};
