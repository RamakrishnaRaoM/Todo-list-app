import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

interface TodoItemProps {
  name: string;
  dueDate: string;
}
interface TotalProps {
  todoItems: TodoItemProps[];
  onDeleteClick: (todoName: string) => void;
}

const TodoItems = ({ todoItems, onDeleteClick }: TotalProps) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>)
};

export default TodoItems;
