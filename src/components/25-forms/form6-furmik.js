import { useFormik } from "formik";
import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import * as Yup from "yup";

const Form6 = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Adınızı giriniz")
      .min(2, "Geçerli bir ad giriniz"),
    lastName: Yup.string()
      .required("Soyadınızı giriniz")
      .min(2, "Geçerli bir soyad giriniz"),
    email: Yup.string()
      .email("Geçerli bir email giriniz")
      .required("Eposta adresinizi giriniz"),
    phone: Yup.string()
      .required("Telefon numranızı giriniz")
      .matches(
        /\(\d{3}\) \d{3} \d{2} \d{2}$/,
        "(xxx) xxx xx xx formatında giriniz"
      ),
  });

  const onSubmit = (values) => {
    alert("Tamam");
    console.log(values)
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  console.log(formik.isValid, formik.dirty);

  return (
    <Container className="mt-5">
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Label>İsim</Label>
          <Input
            placeholder="Adınızı giriniz"
            type="text"
            {...formik.getFieldProps("firstName")}
            invalid={formik.errors.firstName && formik.touched.firstName}
            valid={!formik.errors.firstName}
          />
          <FormFeedback>{formik.errors.firstName}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Soyisim</Label>
          <Input
            type="text"
            placeholder="Soyadınızı giriniz"
            {...formik.getFieldProps("lastName")}
            invalid={formik.errors.lastName && formik.touched.lastName}
            valid={!formik.errors.lastName}
          />
          <FormFeedback>{formik.errors.lastName}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Epostanızı giriniz"
            {...formik.getFieldProps("email")}
            invalid={formik.errors.email && formik.touched.email}
            valid={!formik.errors.email}
          />
          <FormFeedback>{formik.errors.email}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Telefon</Label>
          <Input
            type="text"
            placeholder="Telefonunuzu giriniz"
            {...formik.getFieldProps("phone")}
            invalid={formik.errors.phone && formik.touched.phone}
            valid={!formik.errors.phone}
          />
          <FormFeedback>{formik.errors.phone}</FormFeedback>
        </FormGroup>
        <Button type="submit" color="info" disabled={!(formik.isValid && formik.dirty)}>
          Kaydet
        </Button>
      </Form>
    </Container>
  );
};

export default Form6;
