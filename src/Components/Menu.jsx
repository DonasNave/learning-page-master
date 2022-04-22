import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../Pics/Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'

const Menu = ({lessonCal}) => {
      return (
      <Navbar bg="dark" expand="lg" sticky='top'>
        <Container>
          <Navbar.Brand><img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
            style={{marginRight:5, borderRadius: 5}}/>
            <span id='logo'><span id='robo'>Robo</span>Kurz</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={(event) => {lessonCal(0)}} id='home'><FontAwesomeIcon icon={faGripVertical} />Seznam lekcí</Nav.Link>        
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{color: "white"}}>
              <a id="upol-link" href="https://www.upol.cz/">UPOL</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>)
    }

 
export default Menu;