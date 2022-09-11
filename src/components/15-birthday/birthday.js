import React, { useState } from "react";
import { Button, Container } from "reactstrap";
import data from "./people.json";
import Person from "./person";

const Birthday = () => {
  const [dataPeople, setSataPeople] = useState(data);

  const deletePerson = (id) => {
    const arr = dataPeople.filter((person) => person.id !== id);
    setSataPeople(arr);
  };

  return (
    <Container className="my-5">
      <h1>Today's Birthdates</h1>
      <p>Today : {dataPeople.length} person</p>

      {dataPeople.map((item) => (
        <Person {...item} deletePerson={deletePerson} key={item.id} />
      ))}

      <Button color="danger" onClick={() => setSataPeople([])}>
        Reset
      </Button>
    </Container>
  );
};

export default Birthday;
