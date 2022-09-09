import React, { useState } from 'react'
import { Button, ButtonGroup } from 'reactstrap'

const Counter = () => {

    const[counter, setCounter] = useState(0);

    const handleCounter = (num) => { 
        setCounter((prev)=>prev+num);
     };
    

  return (
    <div>

<ButtonGroup>
  <Button color="danger" onClick={handleCounter(-1)}>
    -
  </Button>
  <Button color="secondary" disabled>
    {counter}
  </Button>
  <Button color="success" onClick={handleCounter(1)}>
    +
  </Button>

  <Button color="info" onClick={()=> setCounter(0)}>
    Reset
  </Button>
</ButtonGroup>
    </div>
  )
}

export default Counter