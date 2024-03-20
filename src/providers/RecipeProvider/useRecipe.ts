import { useContext } from "react"
import { RecipeContext } from "./RecipeProvider";

export const useRecipe = () => {
    const context = useContext(RecipeContext)
    if (!context) {
        throw new Error("useRecipe must be used within a RecipeProvider");
    }
    return context;
};