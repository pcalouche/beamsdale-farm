import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const About = () => {
  return (
    <Container className="Contact p-3">
      <h2 className="text-center">Contact Us</h2>
      <Row>
        <Col lg="4">
          <h5>
            <a href="https://www.facebook.com/Beamsdale-Farm-Est-1950-2161300810584691"
               className="text-dark text-decoration-none">
              <FontAwesomeIcon icon={['fab', 'facebook']} size={'lg'} fixedWidth/> On Facebook
            </a>
          </h5>
        </Col>
        <Col lg="4">
          <h5>
            <a href="mailto:beamsdale@hotmail.com"
               className="text-dark text-decoration-none">
              <FontAwesomeIcon icon={['fas', 'envelope']} size={'lg'} fixedWidth/> beamsdale@hotmail.com
            </a>
          </h5>
        </Col>
        <Col lg="4">
          <h5>
            <a href="tel:7044724820"
               className="text-dark text-decoration-none">
              <FontAwesomeIcon icon={['fas', 'phone-alt']} fixedWidth/> (704) 472-4820
            </a>
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default About;