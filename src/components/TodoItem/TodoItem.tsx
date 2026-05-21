import "../../styles/global.css";
import "./TodoItem.css";

interface TodoItemProps {
  items: string[];
  onDelete: (index: number) => void;
}

function TodoItem({ items, onDelete }: TodoItemProps) {
  return (
    <div className="items-list">
      {items.map((item, index) => (
        <div className="item" key={index}>
          <p>
            {item}{" "}
            <button className="delete-btn" onClick={() => onDelete(index)}>
              Delete
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default TodoItem;
