import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

const UseEffect = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  console.log(
    "CLG: This row works when render and re-render situation (everytime)"
  );

  // useEffect works as asynchrone means works after rendered JSX (return area)

  useEffect(() => {
    console.log(
      `MOUNTING : This row works when the first render situation, then does not work again. 
      The codes are written in this area when we want to use first time only`
    );
  }, []);

  useEffect(() => {
    return () => {
      console.log(
        `UNMOUNTING : It works before component thrown away from memory`
      );
    };
  }, []);

  useEffect(() => {
    console.log(
      `UPDATING : This row works when render and re-render situation (everytime) 
      only difference than CLG :  works after JSX rendering`
    );
  }, []);

  useEffect(() => {
    console.log(
      `UPDATING : This row works after rendering / updating of error state`
    );
  }, [error]);

  return (
    <div>
      <div>
        {message} - {error}
      </div>
      <Button onClick={() => setMessage("Hello")}>Say Hello</Button>
      <Button onClick={() => setError("An Error Occured")}>Throw Error</Button>
    </div>
  );
};

export default UseEffect;
