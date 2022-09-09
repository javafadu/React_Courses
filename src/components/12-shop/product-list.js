import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Product from './product';
import products from "./products.json";


const ProductList = () => {
  return (
    <Container className='my-3'>
        <Row xs="1" sm="2" md="3" lg="4" xxl="6" className='g-4'>

       {
       
       products.map(product=> 
       <Col key={product.id}> 
       <Product {...product}
       />
       </Col>)

       }


        </Row>
    </Container>
  )
}

export default ProductList