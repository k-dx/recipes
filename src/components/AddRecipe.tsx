export default function AddRecipe({ addRecipe }: { addRecipe: () => void }) {
  return (
    <form>
      <div className="mb-6">
        <label
          htmlFor="recipe_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Recipe name
        </label>
        <input
          type="recipe_name"
          id="recipe_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Brocolli and cheese"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="ingredients"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Ingredients
        </label>
        <input
          type="ingredients"
          id="ingredients"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="brocolli, cheese, salt, pepper (separate ingredients with a comma)"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Instructions
        </label>
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="How to make this delicious dish?"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mr-2"
        >
          Add recipe
        </button>

        <button
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          onClick={() => addRecipe()}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
