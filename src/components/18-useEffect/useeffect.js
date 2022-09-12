import React, { useEffect, useState } from 'react';
import { Button, Container } from 'reactstrap';

const ClickTimes = () => {
    const [counter, setCounter] = useState(0);

    useEffect( ()=> {
        document.title=`Hello ${counter}`;
    }, [counter]); 

    

  return (
    <Container className='text-center mt-5'>

        <h2>{counter} time clicked</h2>
        <Button onClick={()=>setCounter(counter+1)}>Click me</Button>

        </Container>
  );
};

export default ClickTimes;