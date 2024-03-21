// import { ISubmittedRecipe } from "./ISubmittedRecipe.type";

// export interface IRecipe extends ISubmittedRecipe {
//   id: number;
//   favorite: boolean;
// }

export interface IRecipe {
  id: number;
  favorite: boolean;
  name: string;
  ingredients: string[];
  description: string;
}
