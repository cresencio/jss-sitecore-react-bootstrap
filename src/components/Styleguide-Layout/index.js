import React from 'react';
import { Placeholder, getChildPlaceholder, getFieldValue } from '@sitecore-jss/sitecore-jss-react';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
/**
 * The main layout (columns) of the styleguide.
 * Navigation is automatically generated based on the components added to the layout,
 * and does not need to be manually maintained.
 */
const StyleguideLayout = (props) => {
  // this code reads the components in the child placeholders of this component,
  // and projects them into the left navigation column for the styleguide
  const sections = getChildPlaceholder(props.rendering, 'jss-styleguide-layout')
    .filter((section) => getFieldValue(section, 'heading'))
    .map((section) => ({
      heading: getFieldValue(section, 'heading'),
      id: `i${section.uid.replace(/[{}]/g, '')}`,
      children: getChildPlaceholder(section, 'jss-styleguide-section')
        .filter((component) => getFieldValue(component, 'heading'))
        .map((component) => ({
          heading: getFieldValue(component, 'heading'),
          id: `i${component.uid.replace(/[{}]/g, '')}`,
        })),
    }))
    .map((section) => (
      <Card key={section.heading} className="mb-5">
        <Card.Header>
          <a href={`#${section.id}`} className="nav-item font-weight-bold">
            {section.heading}
          </a>  
        </Card.Header>
        {section.children && (
          <ListGroup as="ul" variant="flush">
            {section.children.map(
              (child) =>
                child.heading && (
                  <ListGroup.Item as="li">
                    <a key={child.id} href={`#${child.id}`}>
                      {child.heading}
                    </a>
                  </ListGroup.Item>
                )
            )}
          </ListGroup>
        )}
      </Card>
    ));

  return (
    <Row>
      <Col as="aside" lg={4}>{sections}</Col>
      <Col as="article" lg={8}>
        <Placeholder name="jss-styleguide-layout" rendering={props.rendering} />
      </Col>
    </Row>
  );
};

export default StyleguideLayout;
