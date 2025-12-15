import { useState } from "react";

export default function RuleCard({ rule, onToggle, onDelete }) {
  const [completed, setCompleted] = useState(false);

  const handleClick = () => {
    setCompleted(!completed);
    onToggle(rule.id, !completed);
  };

  return (
    <div className="
      bg-white dark:bg-gray-800
      p-4 rounded shadow transition
    ">
      <h3 className="text-lg font-bold">{rule.title}</h3>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {rule.category}
      </span>

      <p className="mt-2">{rule.description}</p>

      <div className="flex gap-3 mt-4">
        <button
          onClick={handleClick}
          aria-pressed={completed}
          className={`px-3 py-1 rounded text-white transition ${
            completed
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-600 hover:bg-gray-700"
          }`}
        >
          {completed ? "Compliant ✅" : "Marcar como cumplida"}
        </button>

        <button
          onClick={() => onDelete(rule.id)}
          className="
            px-3 py-1 rounded
            bg-red-600 hover:bg-red-700
            text-white transition
          "
          aria-label="Eliminar norma"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
