import { useState } from "react";
import "../../styles/global.css";
import "./TodoInput.css";

interface TodoInputProps {
  items: string[];
  onAdd: (text: string) => void;
}

function TodoInput({ items, onAdd }: TodoInputProps) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    if (items.includes(text.trim())) {
      setError("The task is already added");
      return;
    }
    onAdd(text.trim());
    setText("");
    setError("");
  };

  return (
    <div className="todo-input-wrapper">
      <div className="todo-input-row">
        <input
          type="text"
          placeholder="Enter task"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setError("");
          }}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button className="add-btn" onClick={handleAdd}>
          +
        </button>
      </div>
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
}

export default TodoInput;
