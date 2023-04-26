import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Basket from './Basket';


function NavigationBar(props){

    return(
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='brand'>HomeTech</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"className='brand'>Home</Nav.Link>
            <Nav.Link href="#action2"className='brand'>Technology</Nav.Link>
            <NavDropdown title="Account" id="navbarScrollingDropdown" className='brand'>
              <NavDropdown.Item href="#action3"className='brand'>Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Favourites
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Recent Purchases
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#"className='brand'>
              <p>Basket</p>
            </Nav.Link>
            <Basket incrementCount = {props.incrementCount}/>
            <p className='total'>Total:£{props.total}</p>
            <Button className='empty'variant='outline-danger' onClick={props.clearBasket}>Empty</Button>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavigationBar;