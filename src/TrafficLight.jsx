import React, { useEffect, useState } from "react";
import "./App.css";
import { NumericFormat } from "react-number-format";
import { Button, Input } from "antd";

const arr = ["red", "yellow", "green"];

const TrafficLight = () => {
  const [start, setStart] = useState(false);
  const [value, setValue] = useState("");
  const [index, setIndex] = useState(null);

  useEffect(() => {
    if (!start || !value) return;
    const timer = setInterval(() => {
      const currentValue = value - 1;
      setValue(currentValue);

      if (currentValue > 10) {
        setIndex(0);
      } else if (currentValue <= 10 && currentValue > 0) {
        setIndex(1);
      } else {
        setIndex(2);
      }
    }, 1000);

    //clean up function
    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <div className="traffic-light">
      <div className="count">
        {" "}
        <NumericFormat
          value={value}
          customInput={Input}
          onChange={(e) => setValue(e.target.value)}
          style={{
            width: "300px",
          }}
        />
        <Button
          type="primary"
          size="middle"
          onClick={() => setStart(true)}
          style={{
            marginLeft: "10px",
          }}
        >
          click
        </Button>
      </div>
      <div className="lights">
        {arr.map((light, i) => (
          <div
            className={`light `}
            key={light}
            style={{
              background: i === index ? light : "",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TrafficLight;
