interface Props{
  todoName: string;
  todoDate: string;
  onDeleteClick: (todoName: string) => void;
}


function TodoItem({ todoName, todoDate, onDeleteClick }: Props) {
  return (
    <div className="container">
      <div className="row items-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger delete"
            onClick={() => onDeleteClick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
