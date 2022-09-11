import React, { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";

const FunCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = (val) => {
    if(val<0) val=0;
    setCounter(val)
  };

  return (
    <ButtonGroup>
      <Button color="danger" onClick={() => handleCounter(counter-1)}>
        -
      </Button>
      <Button color="secondary" disabled>
        {counter}
      </Button>
      <Button color="success" onClick={() => handleCounter(counter+1)}>
        +
      </Button>
      <Button color="info" onClick={() => handleCounter(0)}>
        Reset
      </Button>
    </ButtonGroup>
  );
};

export default FunCounter;