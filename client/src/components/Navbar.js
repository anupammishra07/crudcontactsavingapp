import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navbars() {
  return (
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="/">Contact Application</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="http://localhost:3000/create">Create User</Nav.Link>
        <Nav.Link href="http://localhost:3000/updateuser/:id">Update User</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}
