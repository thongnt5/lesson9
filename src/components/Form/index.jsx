import React, { useContext, useState } from "react";
import "./styles.css";
import { Button, Input } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import { TododContext } from "../../App";
const Form = () => {
  const {todos, handleAddTodo,isChanged,valueChanged , handleInput} = useContext(TododContext);
  const [value, setValue] = useState("");

  const onClick = () => {

    if(isChanged){
      const newTodoChanged = {
        id: new Date().getTime(),
        isCompleted: false,
        name: valueChanged,
      };
    }else{
      const newTodo = {
        id: new Date().getTime(),
        isCompleted: false,
        name: value,
      };
      handleAddTodo(newTodo);
      setValue("");
    }
  };

  return (
    <div className="form">
      <Input
        className={isChanged ? "inputChanged": "input"}
        size="large"
        value={isChanged ? valueChanged : value}
        onChange={(e) => {isChanged ? handleInput(e) : setValue( e.target.value) }}
      />
      <Button
        size="large"
        type="primary"
        onClick={onClick}
        style={{
          background: "#5ba3c9",
        }}
      >
        <AiOutlinePlus />
      </Button>
    </div>
  );
};

export default Form;
