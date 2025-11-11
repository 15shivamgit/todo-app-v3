import { IoIosAddCircleOutline } from "react-icons/io";
import { useRef } from "react";

function TodoAdd({ handleAddItem }) {

 
  const names = useRef();
  const dates = useRef();


  const handleButtonClicked = (event) => {
    event.preventDefault(); //stop default browser action

    const name = names.current.value;
    const date = dates.current.value;
    names.current.value = '';
    dates.current.value = '';

    if(name.trim() === "" && date.trim() === ""){
      alert("please enter something");
    }else {
      handleAddItem(name,date);
    }
  }
  

  return (
    <div className="container text-center">
      <form className="row sk-row"
      onSubmit={handleButtonClicked}>

        <div className="col-6">
          <input type="text" name="" id="" placeholder='Enter Todo here' 
            ref={names}
          />
        </div>
        <div className="col-4">
          <input type="date" 
            ref={dates}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success sk-button" >
            <IoIosAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}
export default TodoAdd;