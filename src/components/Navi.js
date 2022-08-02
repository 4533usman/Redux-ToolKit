import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { CartPlusFill } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';

export const Navi = () => {
  const items = useSelector((state) => state.cart)
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky='top'>
        <Container>
          <Navbar.Brand href="#home">Redux ToolKit</Navbar.Brand>
          <Nav className="justify-content-end ">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/cart"><strong><CartPlusFill />:{items.length}</strong></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}
