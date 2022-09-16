import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Container, Row, Spinner } from "reactstrap";
import { createUser, deleteUser, getUsers, updateUser } from "./api";
import UserCard from "./user-card";

const AxiosCrud = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1- GET ALL USERS
  const handleUsers = async () => {
    const resp = await getUsers();
    setUsers(resp.data);
    setLoading(false);
  };

  // 2- CREATE A USER
  const handleCreateUser = async () => {
    const payload = {
      firstName: "Veli",
      lastName: "Koş",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/955.jpg",
      email: "veli@kos.com",
    };

    const resp = await createUser(payload);
    setUsers([resp.data, ...users]);
    console.log(resp.data);
  };

  // 3- UPDATE A USER
  const handleUpdateUser = async () => {
    const payload = {
      firstName: "Kemal",
      lastName: "Atla",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/955.jpg",
      email: "veli@kos.com",
      id: 33,
    };

    const resp = await updateUser(payload);

    const arr = users.filter((user) => user.id !== resp.data.id);

    setUsers([resp.data, ...arr]);
    console.log(resp.data);
  };
  

  // 4- DELETE A USER
  const handleDeleteUser = async (id) => {
    const resp = await deleteUser(id);

    const arr = users.filter((user) => user.id !== resp.data.id);

    setUsers([...arr]);

  }



  useEffect(() => {
    handleUsers();
  }, []);

  return (
    <Container className="mt-5">
      {loading && (
        <div className="d-flex align-items-center justify-content-center">
          <Spinner color="primary" />
          &nbsp;&nbsp;Loading...
        </div>
      )}

      <Button color="success" onClick={handleCreateUser}>
        Create
      </Button>
      <Button color="warning" onClick={handleUpdateUser}>
        Update
      </Button>
      <Button color="danger">Delete</Button>

      <Row className="g-4">
        {users.map((user) => (
          <Col sm={6} md={4} lg={3} key={user.id}>
            <UserCard {...user} handleDeleteUser={handleDeleteUser}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AxiosCrud;