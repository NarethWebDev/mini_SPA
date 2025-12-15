import { useState } from "react";
import Header from "./components/header";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import RuleList from "./components/RuleList";
import CounterDisplay from "./components/CounterDisplay";
import Footer from "./components/Footer";
import RuleForm from "./components/RuleForm";
import { rules as initialRules } from "./data/normas";

export default function App() {
  const [rules, setRules] = useState(initialRules);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [completed, setCompleted] = useState({});

  const handleToggle = (id, status) => {
    setCompleted((prev) => ({ ...prev, [id]: status }));
  };

  const handleDelete = (id) => {
    setRules((prev) => prev.filter((rule) => rule.id !== id));
    setCompleted((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const filteredRules = rules.filter((rule) => {
    return (
      rule.title.toLowerCase().includes(searchText.toLowerCase()) &&
      (category === "" || rule.category === category)
    );
  });

  const completedCount = Object.values(completed).filter(Boolean).length;

  return (
    <main className="min-h-screen bg-indigo-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition">
      <Header />

      <div className="flex justify-between items-center max-w-5xl mx-auto px-4">
        <SearchBar searchText={searchText} onSearch={setSearchText} />
      </div>

      <CategoryFilter category={category} onSelect={setCategory} />

      <CounterDisplay count={completedCount} />

      <section id="normas" className="max-w-5xl mx-auto px-4">
        <RuleList
          rules={filteredRules}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </section>

      <section id="nueva-norma">
        <RuleForm rules={rules} setRules={setRules} />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
