import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const SectionHero = (props) => (
  <Jumbotron fluid>
    <Container>
      <Row>
        <Col>
          <Placeholder name="section-hero-content" rendering={props.rendering} />
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default SectionHero;
