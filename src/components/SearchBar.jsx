export default function SearchBar({ searchText, onSearch }) {
  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <input
        type="text"
        value={searchText}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Buscar normas por texto o categoría…"
        className="
          w-full border rounded p-2 transition
          bg-white text-gray-900
          dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
          focus:outline-indigo-500 dark:focus:outline-indigo-400
        "
      />
    </div>
  );
}
