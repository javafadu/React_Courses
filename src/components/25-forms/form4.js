import React, { useState } from "react";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";

const Form4 = () => {
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    phone:""
  });

  const handleFormData = (e) => { 
    const {name, value} = e.target;
    
        setFormData({...formData, [name]:value})

   }

  console.log(formData);

  return (
    <Container className="mt-5">
      <Form>
        <FormGroup>
          <Label>First Name</Label>
          <Input
            name="firstName"
            type="text"
            placeholder="Your First Name"
            value={formData.firstName}
            onChange={handleFormData}
          />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            name="lastName"
            type="text"
            placeholder="Your Last Name"
            value={formData.lastName}
            onChange={handleFormData}
          />
        </FormGroup>
        <FormGroup>
          <Label>E-mail</Label>
          <Input
            name="email"
            type="email"
            placeholder="Your e-mail Address"
            value={formData.email}
            onChange={handleFormData}
          />
        </FormGroup>
        <FormGroup>
          <Label>Phone</Label>
          <Input
            name="phone"
            type="text"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleFormData}
          />
        </FormGroup>
      </Form>
    </Container>
  );
};

export default Form4;