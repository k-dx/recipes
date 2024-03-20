import "./index.css";
import RecipeProvider from "./providers/RecipeProvider/RecipeProvider";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <RecipeProvider>
      <RecipeList />
    </RecipeProvider>
  );
}

export default App;
