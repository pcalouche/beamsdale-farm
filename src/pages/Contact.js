import React from 'react';
import {Container} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const About = props => {
  return (
    <Container fluid className="About">
      Contact
      <div><FontAwesomeIcon icon={['fab', 'facebook']}/></div>
    </Container>
  );
};

export default About;