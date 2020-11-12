import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

import {giftBaskets1, giftBaskets2} from '../images';

const GiftBaskets = () => {
  return (
    <Container className="GiftBaskets p-3">
      <h3 className="text-center text-uppercase">Gift Baskets</h3>
      <Row>
        <Col>
          <h5 className="text-center">Gift baskets with farm fresh items. Great for Christmas, teacher gifts, etc!</h5>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <img className="img-fluid rounded mb-3" src={giftBaskets1} alt="Gift Basket 1"/>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <img className="img-fluid rounded mb-3" src={giftBaskets2} alt="Gift Basket 2"/>
        </Col>
      </Row>
    </Container>
  );
};

export default GiftBaskets;