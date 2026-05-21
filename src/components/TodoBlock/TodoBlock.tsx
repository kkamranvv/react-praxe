import "./TodoBlock.css";
import "../../styles/global.css";
import TodoItem from "../TodoItem/TodoItem";
import TodoInput from "../TodoInput/TodoInput";
import { useState } from "react";

const todoSections = ["Work", "Social life", "Home", "Sport"];

function TodoBlock() {
  const [items, setItems] = useState<Record<string, string[]>>({
    Work: [],
    "Social life": [],
    Home: [],
    Sport: [],
  });

  const handleAdd = (section: string, text: string) => {
    setItems({ ...items, [section]: [...items[section], text] });
  };

  const handleDelete = (section: string, index: number) => {
    setItems({ ...items, [section]: items[section].filter((_, i) => i !== index) });
  };

  return (
    <div>
      <ul className="todo-sections">
        {todoSections.map((section) => (
          <li key={section}>
            <span className="section-name">{section}</span>
            <TodoInput items={items[section]} onAdd={(text) => handleAdd(section, text)} />
            <TodoItem items={items[section]} onDelete={(i) => handleDelete(section, i)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoBlock;
