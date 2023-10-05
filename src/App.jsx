import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";
//crud

export const TododContext = createContext(null);

const App = () => {
  const [todos, setTodos] = useState([]);

  const [count, setCount] = useState(0);

  const [countComplete, setCountComplete] = useState(0);

  const [isChanged, setIsChanged] = useState(false);

  const [valueChanged, setValueChanged] = useState("");

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    setCount(todos.length + 1);
  };

  //Ham tim vi tri index
  function findIndexInList(list, conditionFn) {
    for (let i = 0; i < list.length; i++) {
      if (conditionFn(list[i])) {
        return i; // Trả về chỉ số của đối tượng thỏa mãn điều kiện
      }
    }
    return -1; // Trả về -1 nếu không tìm thấy đối tượng thỏa mãn điều kiện
  }

  const totalTask = () => {
    return count;
  };

  const totalTaskComplete = () => {
    return countComplete;
  };

  //Changed value 
  useEffect(()=>{
    if(isChanged){
     
      setValueChanged(valueChanged);
    }

  },[todos,isChanged]);


  const completeTask = (idTask) => {
    
    let findIndexTodos = findIndexInList(todos, (item) => item.id === idTask);

    if (findIndexTodos != -1) {
      let newAllTask = [...todos];

      newAllTask[findIndexTodos].isCompleted =
        !newAllTask[findIndexTodos].isCompleted;

      setTodos(newAllTask);

      if (newAllTask[findIndexTodos].isCompleted) {
        setCountComplete(countComplete + 1);
      } else {
        setCountComplete(countComplete - 1);
      }
    }
  };


  const deleteTask = (idTask) => {
    
    let findIndexTodos = findIndexInList(todos, (item) => item.id === idTask);

    if (findIndexTodos != -1) {
      let newAllTask = [...todos];

      newAllTask.splice(findIndexTodos, 1);

      setTodos(newAllTask);
      setCount(newAllTask.length);
    }
  };

  const removeAll = () =>{

    let newAllTask = [...todos];
    for(let i = 0  ; i< newAllTask.length; i++){
      if(newAllTask[i].isCompleted === true){
       
        delete newAllTask[i];
      }
    }
    
    setTodos(newAllTask);
    //setCount(newAllTask.length);
  };

  
  const handleInput = (event) =>{

    const newInput = event.target.value;

    setValueChanged(newInput);
    
  };
  console.log(todos);
  return (
    <TododContext.Provider
      value={{
        todos,
        handleAddTodo,
        completeTask,
        deleteTask,
        totalTask,
        totalTaskComplete,
        isChanged,
        valueChanged,
        removeAll,
        handleInput,
      }}
    >
      <div className="container">
        <h1>TODOLIST</h1>
        <Form />
        <Todo />
      </div>
    </TododContext.Provider>
  );
};

export default App;
