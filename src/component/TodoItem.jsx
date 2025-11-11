import { AiFillDelete } from "react-icons/ai";


function TodoItem({ todoItem, todoDate,handleDeleteItem }){

  return (
    <div className="container">
      <div className="row sk-row">
        <div className="col-6">{todoItem}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger sk-button" 
            onClick={handleDeleteItem}>
            <AiFillDelete />
          </button>
        </div>
      </div> 
    </div> 
  );
}
export default TodoItem;