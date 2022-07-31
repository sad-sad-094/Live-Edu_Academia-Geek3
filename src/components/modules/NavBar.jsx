/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React from 'react';
import { MdHomeFilled, MdScore, MdTopic } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import Nav from 'react-bootstrap/nav';
import Container from 'react-bootstrap/container';
import Navbar from 'react-bootstrap/navbar';
import Col from 'react-bootstrap/col';
import Row from 'react-bootstrap/row';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (

    <Container>
      <Navbar expand="lg" variant="dark" bg="light" className="fixed-bottom">
        <Nav variant="tabs" defaultActiveKey="/home" className='m-auto'>
          <Row className="justify-content-md-center">
            <Col md="auto"><Nav.Item>
              <Link to="/home" >
                <MdHomeFilled color={'black'} size={30} />
              </Link></Nav.Item></Col>

            <Col md="auto"><Nav.Item>
              <Link to="/test" >
                <MdTopic color={'black'} size={30} />
              </Link></Nav.Item></Col>

            <Col md="auto"><Nav.Item><Link to="/"><MdScore color={'black'} size={30} /></Link></Nav.Item></Col>

            <Col md="auto"><Nav.Item>
              <Link to="/userprofile">
                <FaUser color={'black'} size={25} />
              </Link></Nav.Item></Col>
          </Row>
        </Nav>
      </Navbar>
    </Container>

  )
}

export default NavBar;
