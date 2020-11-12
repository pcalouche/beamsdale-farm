import React from 'react';
import {Container} from 'react-bootstrap';

import {cows1} from '../images';

const Home = () => {
  return (
    <Container className="Home p-3 text-center">
      <h1>Welcome to Beamsdale Farm Est 1950</h1>
      <img className="img-fluid rounded" src={cows1} alt="cows"/>
    </Container>
  );
};

export default Home;