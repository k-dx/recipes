import { ISubmittedRecipe } from './ISubmittedRecipe.type';

export interface IRecipe extends ISubmittedRecipe {
  id: number;
  favorite: boolean;
}
