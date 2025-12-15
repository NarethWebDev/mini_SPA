export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow mb-8 transition">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          Reglamento del Aprendiz SENA
        </h1>

        <nav className="flex gap-4 text-gray-700 dark:text-gray-200">
          <a href="#normas" className="hover:underline">
            Normas
          </a>
          <a href="#nueva-norma" className="hover:underline">
            Creación de normas
          </a>
          <a href="#footer" className="hover:underline">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
