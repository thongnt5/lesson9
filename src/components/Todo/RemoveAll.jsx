
import React, {useContext} from "react";
import { Button } from "antd";
import { TododContext } from "../../App";

const RemoveAll = () => {

  const { removeAll  } = useContext(TododContext);
  return (
    <Button
      type="primary"
      style={{
        background: "#5ba3c9",
      }}

      onClick={() => removeAll()}
    >
      Remove checked
    </Button>
  );
};

export default RemoveAll;
