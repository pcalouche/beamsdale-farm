import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

import {cannedTomatoes} from '../images';

const Foods = () => {
  return (
    <Container className="Foods p-3">
      <h3 className="text-center text-uppercase">Foods</h3>
      <h5 className="text-center">We offer several foods made from farm fresh ingredients.</h5>
      <Row>
        <Col md={6} className="d-flex justify-content-center">
          <ul>
            <li>
              Canned tomatoes
            </li>
            <li>
              Roasted tomatoes
            </li>
            <li>
              Spaghetti sauce
            </li>
            <li>
              Spicy marinara sauce
            </li>
            <li>
              Stewed okra and tomatoes
            </li>
            <li>
              Hot and mild salsa
            </li>
            <li>
              Hot and mild salsa
            </li>
            <li>
              Pickles
            </li>
          </ul>
        </Col>
        <Col md={6} className="d-flex justify-content-lg-start justify-content-sm-center">
          <img className="img-fluid rounded" src={cannedTomatoes} alt="Canned Tomatoes"/>
        </Col>
      </Row>
    </Container>
  );
};

export default Foods;