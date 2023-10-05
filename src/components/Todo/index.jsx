import React, { useContext } from "react";
import "./styles.css";
import Item from "./Item";
import Progress from "./Progress";
import RemoveAll from "./RemoveAll";
import { TododContext } from "../../App";

const Todo = () => {
  const { todos  } = useContext(TododContext);
  return (
    <div className="todo-container">
      {todos.map((item) => (
        <Item key={item.id} item={item} />
      ))}
      <div className="todo-bottom">
        <Progress />
        <RemoveAll />
      </div>
    </div>
  );
};

export default Todo;
