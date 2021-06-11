import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CContainer = ({ cweb, id }) => {
  return (
    <Card>
      <Card.Img variant="top" src={cweb.image.current.preview} />
      <Card.Body>
        <LinkContainer to={`/webcam/${cweb.id}`}>
          <Card.Title>{cweb.title}</Card.Title>
        </LinkContainer>

        <Card.Text>{cweb.status}</Card.Text>
        <LinkContainer to={`/webcam/${cweb.id}`}>
          <Button variant="light">See more</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  )
}

export default CContainer
