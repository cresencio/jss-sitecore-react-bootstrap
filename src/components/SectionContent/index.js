import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { Container, Row, Col } from 'react-bootstrap';
const SectionContent = (props) => (
  <Container>
    <Row>
      <Col>
        <Placeholder name="section-container-content" rendering={props.rendering} />
      </Col>
    </Row>
  </Container>
);

export default SectionContent;
