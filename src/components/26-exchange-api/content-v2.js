import React, { useState } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { Button, Input, InputGroup } from "reactstrap";
import StoreContext from "../../store";

const Content = () => {
  const [amount, setAmount] = useState(1);
  const [currency, setCurrency] = useState("USD");

  const store = useContext(StoreContext);
  const { currencies } = store;

  const result = (amount / currencies[currency]).toFixed(2);

  return (
    <div className="mt-4">
      <InputGroup size="lg">
        <Input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
        />
        <Input
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          type="select"
        >
          <option>USD</option>
          <option>EUR</option>
        </Input>
      </InputGroup>

      {result && (
        <h4 className="mt-4">
          1 {currency} = {result} TRY
        </h4>
      )}
    </div>
  );
};

export default Content;