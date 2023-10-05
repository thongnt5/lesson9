import { Checkbox, Typography } from "antd";
import React, { useContext } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { TododContext } from "../../App";
import Input from "antd/es/input/Input";


const Item = ({ item}) => {
  const { completeTask ,deleteTask } = useContext(TododContext);
  const { name, id, isCompleted} = item;
  return (
    <div className="item">
      <div className="item-left">
        <Checkbox checked={isCompleted} onChange={() => completeTask(id)} />
        <Typography>{name}</Typography>
      </div>
      <div className="item-right">
        <MdModeEditOutline color="#cce5f0" size={20} className="item-icon" onClick={() => changedTask(id)}/>
        <IoMdTrash color="#cce5f0" size={20} className="item-icon" onClick={() => deleteTask(id)}/>
      </div>
    </div>
  );
};

export default Item;
