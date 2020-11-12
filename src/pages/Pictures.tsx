import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {shuffle} from 'lodash';

import {
  basil,
  cannedTomatoes,
  chicken1,
  chicken2,
  cows1,
  cows2,
  cows3,
  eggs,
  family1,
  family2,
  family3,
  family4,
  family5,
  garlic,
  hay,
  horse
} from '../images/gallery-images';

const Pictures = () => {
  const items = shuffle([
    {src: basil, alText: 'Basil', key: 1},
    {src: cannedTomatoes, altText: 'Basil', key: 2},
    {src: chicken1, altText: 'Basil', key: 3},
    {src: chicken2, altText: 'Basil', key: 4},
    {src: cows1, altText: 'Basil', key: 5},
    {src: cows2, altText: 'Basil', key: 6},
    {src: cows3, altText: 'Basil', key: 7},
    {src: eggs, altText: 'Basil', key: 8},
    {src: family1, altText: 'Basil', key: 9},
    {src: family2, altText: 'Basil', key: 10},
    {src: family3, altText: 'Basil', key: 11},
    {src: family4, altText: 'Basil', key: 12},
    {src: family5, altText: 'Basil', key: 13},
    {src: garlic, altText: 'Basil', key: 14},
    {src: hay, altText: 'Basil', key: 15},
    {src: horse, altText: 'Basil', key: 16}
  ]);

  return (
    <Container className="Pictures p-3">
      <h3 className="text-center text-uppercase">Pictures</h3>
      <Row>
        {
          items.map(item => {
            return (
              <Col key={item.key} sm={12} md={6} lg={4} className="d-flex justify-content-center">
                <img className="img-fluid rounded mb-3" src={item.src} alt={item.altText}/>
              </Col>
            );
          })
        }
      </Row>
    </Container>
  );
};

export default Pictures;