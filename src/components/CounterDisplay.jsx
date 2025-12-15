export default function CounterDisplay({ count }) {
  return (
    <div className="
      max-w-5xl mx-auto my-4 p-4 rounded text-center font-semibold
      bg-indigo-100 text-indigo-800
      dark:bg-indigo-900 dark:text-indigo-200
    ">
      Normas cumplidas: {count}
    </div>
  );
}
