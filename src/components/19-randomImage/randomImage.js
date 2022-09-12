import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Container,
} from "reactstrap";

const RandomImages = () => {
  const [randomNum, setRandomNum] = useState(1);

  const handleRandomNum = () => {
    //Math.flooer(Math.random()*(max-min+1)+min)
    const rand = Math.floor(Math.random() * 6 + 1);
    setRandomNum(rand);
  };


  let image = `image${randomNum}.jpg`;
 

  return (
    <div>
      <Container className="mt-5">
        <Card>
          <img src={require(`../../assets/img/${image}`)} alt="Sample" />
          <CardBody>
            <Button onClick={handleRandomNum}>Change</Button>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default RandomImages;
