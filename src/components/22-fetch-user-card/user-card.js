import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

const UserCard = (props) => {
  const { firstName, lastName, avatar, email } = props;
  return (
    <Card className="h-100">
      <img alt={`${firstName} ${lastName}`} src={avatar} />
      <CardBody>
        <CardTitle tag="h5">{`${firstName} ${lastName}`}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {email}
        </CardSubtitle>
        <Button>Details</Button>
      </CardBody>
    </Card>
  );
};

export default UserCard;