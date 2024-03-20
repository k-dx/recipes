import { IFilters } from "./IFilters.type";
import { IRecipe } from "./IRecipe.type";

export interface IState {
  recipes: IRecipe[];
  filters: IFilters;
}
