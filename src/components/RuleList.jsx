import RuleCard from "./RuleCard";

export default function RuleList({ rules, onToggle, onDelete }) {
  if (rules.length === 0) {
    return <p className="text-center mt-6">No hay normas.</p>;
  }

  return (
    <div className="grid gap-4 max-w-5xl mx-auto">
      {rules.map((rule) => (
        <RuleCard
          key={rule.id}
          rule={rule}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
