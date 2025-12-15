export default function CategoryFilter({ category, onSelect }) {
  return (
    <div className="max-w-5xl mx-auto my-4">
      <select
        value={category}
        onChange={(e) => onSelect(e.target.value)}
        className="
          w-full p-2 rounded border transition
          bg-white text-gray-900
          dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
        "
      >
        <option value="">Todas las categorías</option>
        <option value="Presentación">Presentación</option>
        <option value="Identificación">Identificación</option>
        <option value="Asistencia">Asistencia</option>
        <option value="Conducta">Conducta</option>
        <option value="Normas de seguridad">Normas de seguridad</option>
      </select>
    </div>
  );
}
