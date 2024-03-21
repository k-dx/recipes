import { IRecipe } from "./IRecipe.type";

// export interface ISubmittedRecipe {
//   name: string;
//   ingredients: string[];
//   description: string;
// }

export type ISubmittedRecipe = Exclude<IRecipe, "id" | "favorite">;
