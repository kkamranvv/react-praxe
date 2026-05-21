import "./TodoPage.css";
import "../../styles/global.css";
import TodoBlock from "../TodoBlock/TodoBlock";

function TodoPage() {
  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoBlock />
    </div>
  );
}

export default TodoPage;
