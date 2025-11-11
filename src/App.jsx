import TodoAdd from "./component/TodoAdd";
import TodoApp from "./component/TodoApp";
import TodoList from "./component/TodoList";
import './App.css';
import { useState } from "react";

function App() {

  const [item,setItem] = useState([]);
  
  const handleAddItem = (itemName,dueDate) => {
    //console.log(`Item : ${itemName}, Date : ${dueDate}`)

    //  updates spread operator
    // const newItems = [...item, {name : itemName, date : dueDate}];
    // setItem(newItems);
    
    
    //  function updates
    // setItem((currValue) =>{
    //   const newItems = [{name:itemName,date:dueDate},...currValue];
    //   return newItems;
    // });

    
    //  function update short
    setItem((currValue) => [{name:itemName,date:dueDate},...currValue]);

  };

  const handleDeleteItem = (idx) => {
    //console.log(`Deleted item index: ${idx}`);
    const newItem = item.filter((_,index) => index !== idx);
    setItem(newItem);
  }

  return <center className="todo-container">
    <TodoApp />
    <TodoAdd handleAddItem={handleAddItem} />
    {item.length === 0 && <h1 className="WelcomeMsg">Enjoy your day!</h1> }
    <TodoList data={item} handleDeleteItem={handleDeleteItem} />

  </center>

}

export default App; 