import React from 'react';
import {CardBody, Container} from 'reactstrap';

import {cows1} from '../images';

const Home = () => {
  return (
    <Container className="Home">
      <CardBody className="text-center">
        <h1>Welcome to Beamsdale Farm Est 1950</h1>
        <img className="img-fluid rounded" src={cows1} alt="cows"/>
      </CardBody>
    </Container>
  );
};

export default Home;