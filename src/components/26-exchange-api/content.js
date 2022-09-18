import React, { useState } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { Button, Input, InputGroup } from "reactstrap";
import StoreContext from "../../store";

const Content = () => {
  const [result, setResult] = useState(null);

  // Merkezi state e erişmek için 
  const store = useContext(StoreContext);
  const { currencies } = store;
  // ***************

  const refAmount = useRef(null);
  const refType = useRef(null);

  console.log(currencies);

  const convertCurrency = () => {
    const tl = (refAmount.current.value / currencies[refType.current.value]).toFixed(2);
    setResult(tl);

  };

  return (
    <div className="mt-4">
      <InputGroup size="lg">
        <Input innerRef={refAmount} defaultValue="1" type="number"/>
        <Input type="select" innerRef={refType}>
          <option>USD</option>
          <option>EUR</option>
        </Input>
        <Button onClick={convertCurrency}>Convert to TRY</Button>
      </InputGroup>

      {result && <h4 className="mt-4">1 {refType.current.value} = {result} TRY</h4>}
    </div>
  );
};

export default Content;