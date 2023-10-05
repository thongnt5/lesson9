import React ,{useContext}from "react";
import { TododContext } from "../../App";

const Progress = () => {

  const { totalTask,totalTaskComplete } = useContext(TododContext);
  let totalTaskList = totalTask();
  let countTaskComplete = totalTaskComplete();
  return (
    <div className="progress">
      <span className="layer-progress"></span>
      <div className="progress-content">
        <p className="text">
          <span className="bold">{countTaskComplete}</span> of
          <span className="bold">{" "}{totalTaskList}</span> tasks done
        </p>
      </div>
    </div>
  );
};

export default Progress;
