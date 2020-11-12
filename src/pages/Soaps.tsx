import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

import {goatsMilkSoap, pumpkinSoap} from '../images';

const Soaps = () => {
  return (
    <Container className="Foods p-3">
      <h3 className="text-center text-uppercase">Soaps</h3>
      <Row>
        <Col md={6}>
          <h5 className="text-center">Goat's Milk Soap</h5>
          <p>
            Made with goat's milk soap base only, add essentials oils of your choice &mdash;
            most popular is lavender and rosemary. Add fresh, farm herbs to the soap.
            Non-irritating, clean, fresh, no artificial fragrances or ingredients.
          </p>
          <p>
            Soap varieties: Goat’s milk with lavender, Goat’s milk with rosemary, Goat’s milk with pumpkin and coffee
          </p>
        </Col>
        <Col md={6} className="d-flex justify-content-lg-start justify-content-sm-center">
          <img className="img-fluid rounded mb-3" src={goatsMilkSoap} alt="Goat's Milk Soap"/>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h5 className="text-center">Glycerin based soap</h5>
          <p>
            Made with glycerin soap base only, add essential oils of your choice &mdash; most popular is lavender or rosemary.
            Add fresh, farm herbs to the soap. Non-irritating, clean, fresh, no artificial fragrances or ingredients
          </p>
          <p>
            Soap varieties: rosemary with lemon, lemon and local honey, pumpkin
          </p>
        </Col>
        <Col md={6} className="d-flex justify-content-lg-start justify-content-sm-center">
          <img className="img-fluid rounded mb-3" src={pumpkinSoap} alt="Pumpkin Soap"/>
        </Col>
      </Row>
    </Container>
  );
};

export default Soaps;