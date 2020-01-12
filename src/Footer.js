import React from 'react';
import {Container} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer>
      <Container className="Footer text-center p-3">
        <a href="https://www.facebook.com/Beamsdale-Farm-Est-1950-2161300810584691"
           className="text-dark text-decoration-none ml-1 mr-1" title="On Facebook" aria-label="Facebook Link">
          <FontAwesomeIcon icon={['fab', 'facebook']} size={'lg'} fixedWidth/>
        </a>
        <a href="mailto:beamsdale@hotmail.com"
           className="text-dark text-decoration-none ml-1 mr-1" title="Email at beamsdale@hotmail.com" aria-label="Email at beamsdale@hotmail.com">
          <FontAwesomeIcon icon={['fas', 'envelope']} size={'lg'}/>
        </a>
        <a href="tel:7044724820"
           className="text-dark text-decoration-none ml-1 mr-1" title="Call at (704) 472-4820" aria-label="Call at (704) 472-4820">
          <FontAwesomeIcon icon={['fas', 'phone-alt']} fixedWidth/>
        </a>
      </Container>
    </footer>
  );
};

export default Footer;