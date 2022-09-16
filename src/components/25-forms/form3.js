import React, { useState } from "react";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";

const Form3 = () => {
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    phone:""
  });

  console.log(formData);

  return (
    <Container className="mt-5">
      <Form>
        <FormGroup>
          <Label>İsim</Label>
          <Input
            type="text"
            placeholder="Adınızı giriniz"
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label>Soyisim</Label>
          <Input
            type="text"
            placeholder="Soyadınızı giriniz"
            value={formData.lastName}
            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Epostanızı giriniz"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label>Telefon</Label>
          <Input
            type="text"
            placeholder="Telefonunuzu giriniz"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </FormGroup>
      </Form>
    </Container>
  );
};

export default Form3;