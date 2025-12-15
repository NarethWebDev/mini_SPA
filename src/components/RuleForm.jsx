import { useState } from "react";

export default function RuleForm({ rules, setRules }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !category || !description) return;

    const newRule = {
      id: Date.now(),
      title,
      category,
      description,
    };

    setRules([...rules, newRule]);

    // limpiar formulario
    setTitle("");
    setCategory("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-6 rounded shadow max-w-3xl mx-auto my-6"
    >
      <h2 className="text-xl font-bold mb-4">Agregar nueva norma</h2>

      <div className="mb-3">
        <label className="block mb-1">Nombre de la norma</label>
        <input
          type="text"
          className="w-full border rounded p-2 dark:bg-gray-700"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1">Categoría</label>
        <input
          type="text"
          className="w-full border rounded p-2 dark:bg-gray-700"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Descripción</label>
        <textarea
          className="w-full border rounded p-2 dark:bg-gray-700"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        Agregar norma
      </button>
    </form>
  );
}
