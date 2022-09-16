import React, { useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

const Form5 = () => {
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

   const handleSubmit = (e) => { 
      e.preventDefault();

      if(!formData.firstName || formData.firstName.length<2) {
        alert("Please provide a valid first name");
        return;
      }

      if(!formData.lastName || formData.lastName.length<2) {
        alert("Please provide a valid last name");
        return;
      }

      if(!formData.email) {
        alert("Please provide a valid email");
        return;
      }

      if(!formData.phone) {
        alert("Please provide a valid phone number");
        return;
      }

      alert("After this step API will call")

    }

  console.log(formData);

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
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

        <Button type="submit" color="info">SAVE</Button>
      </Form>
    </Container>
  );
};

export default Form5;