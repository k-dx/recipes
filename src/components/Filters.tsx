import { useRecipe } from "../providers/RecipeProvider/useRecipe";

export default function Filters() {
  const { filters, onSearchChange, onFavoriteChange } = useRecipe();
  return (
    <div className="p-6">
      <h1>Filters</h1>
      <form>
        <div>
          <label className="mr-2" htmlFor="search">
            Search
          </label>
          <input
            className="border"
            type="text"
            id="search"
            placeholder="Search your recipes..."
            value={filters.search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <div>
          <label className="mr-2" htmlFor="favorite">
            Favorite
          </label>
          <input
            onChange={() => onFavoriteChange()}
            type="checkbox"
            id="favorite"
          />
        </div>
      </form>
    </div>
  );
}
