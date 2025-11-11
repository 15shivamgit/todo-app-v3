import TodoItem from "./TodoItem";

function TodoList({ data, handleDeleteItem }) {
  return (
    <div className="Todo-items">
      {data.map((item, index) => (
        <TodoItem key={index} todoItem={item.name} todoDate={item.date} 
        handleDeleteItem={() => handleDeleteItem(index)} />
      ))}
    </div> 
  );
}
export default TodoList;