import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { Jumbotron, Container } from 'react-bootstrap';

const SectionHero = (props) => (
  <Jumbotron fluid>
    <Container>
      <Placeholder name="section-hero-content" rendering={props.rendering} />
    </Container>
  </Jumbotron>
);

export default SectionHero;
