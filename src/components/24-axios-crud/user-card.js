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
  const { id, firstName, lastName, avatar, email, handleDeleteUser } = props;

  const deleteUser = () => { 
      const resp = window.confirm("Are you sure want to delete?");
      if(!resp) return;

      handleDeleteUser(id);


   }


  return (
    <Card className="h-100">
      <img alt={`${firstName} ${lastName}`} src={avatar} />
      <CardBody>
        <CardTitle tag="h5">{`${firstName} ${lastName}`}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {email}
        </CardSubtitle>
        <Button color="danger" onClick={deleteUser}>Delete</Button>
      </CardBody>
    </Card>
  );
};

export default UserCard;