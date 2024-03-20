import { useRecipe } from "../providers/RecipeProvider/useRecipe";

interface IProps {
  className: string;
}

export default function Filters({ className }: IProps) {
  const { filters, onSearchChange, onFavoriteChange } = useRecipe();
  return (
    <form className={className}>
      <div className="flex">
        <input
          type="text"
          className="rounded-none rounded-l-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search your recipes..."
          value={filters.search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <div className="flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 m">
          <input
            id="favorite-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            checked={filters.favorite}
            onChange={() => onFavoriteChange()}
          />
          <label
            htmlFor="only-done-checkbox"
            className="w-full ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            <span>⭐</span>
          </label>
        </div>
      </div>
    </form>
  );
}
