import React from 'react';
import {Alert, Container, Row, Col} from "reactstrap";

const BsDynamic = () => {

    const open = true;

  return (
    <div>
<Container>
    <Row>
        <Col md={4} xl={3} xxl={2}>Cell1</Col>
        <Col md={4} xl={3} xxl={2}>Cell2</Col>
        <Col md={4} xl={3} xxl={2}>Cell3</Col>
        <Col md={4} xl={3} xxl={2}>Cell4</Col>
        <Col md={4} xl={3} xxl={2}>Cell5</Col>
        <Col md={4} xl={3} xxl={2}>Cell6</Col>
        
    </Row>
<Alert color="warning" isOpen={open}>
  Hey! Pay attention.
</Alert>
</Container>

    </div>
  )
}

export default BsDynamic