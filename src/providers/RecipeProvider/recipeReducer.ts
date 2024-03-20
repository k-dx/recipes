import { IRecipe } from "../../types/IRecipe.type";
import { IState } from "../../types/IState.type";

type RecipeAction =
  | { type: "ADD_RECIPE"; payload: IRecipe }
  | { type: "DELETE_RECIPE"; payload: number }
  | { type: "TOGGLE_FAVORITE"; payload: number }
  | { type: "SEARCH_CHANGE"; payload: string }
  | { type: "FAVORITE_CHANGE" };

export const recipeAppReducer = (state: IState, action: RecipeAction) => {
  console.log(action);
  switch (action.type) {
    case "ADD_RECIPE":
      return {
        filters: state.filters,
        recipes: [...state.recipes, action.payload],
      };
    case "DELETE_RECIPE":
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
      };
    case "TOGGLE_FAVORITE":
      return {
        filters: state.filters,
        recipes: state.recipes.map((recipe) =>
          recipe.id === action.payload
            ? { ...recipe, favorite: !recipe.favorite }
            : recipe
        ),
      };
    case "SEARCH_CHANGE":
      return {
        filters: { ...state.filters, search: action.payload },
        recipes: state.recipes,
      };
    case "FAVORITE_CHANGE":
      return {
        filters: { ...state.filters, favorite: !state.filters.favorite },
        recipes: state.recipes,
      };
  }
};
