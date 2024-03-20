import "./index.css";
import RecipeProvider from "./providers/RecipeProvider/RecipeProvider";
import RecipeApp from "./components/RecipeApp";

function App() {
  return (
    <RecipeProvider>
      <div className="dark:bg-[#222831] dark:text-white min-h-screen pt-10">
        <RecipeApp />
      </div>
    </RecipeProvider>
  );
}

export default App;
