import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { NavLink, useNavigate } from "react-router-dom";
import { NavItem } from "reactstrap";
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [searchVal, setSearchVal] = useState('');
  console.log(searchVal)

  useEffect(() => {
    
  })

    return(
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Menu" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/schools">View Schools</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/user">
                User Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Nav
            className=""
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Nav.Link as={Link} to="/login"> Login </Nav.Link>
          <Nav.Link as={Link} to="/signup"> Signup </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchVal}
              onChange={((e) => setSearchVal(e.target.value))}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}




export default Navigation;
