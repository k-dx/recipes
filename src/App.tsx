import "./index.css";
import RecipeProvider from "./providers/RecipeProvider/RecipeProvider";
import RecipeApp from "./components/RecipeApp";

function App() {
  return (
    <RecipeProvider>
      <RecipeApp />
    </RecipeProvider>
  );
}

export default App;
