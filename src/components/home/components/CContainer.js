import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const CContainer = ({ location }) => {
  console.log(location.state.cData)
  const dataItems = location.state.cData
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Link to="/">
              <Button className="my-3" variant="light">
                Go back
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="cards">
              {dataItems.map((cweb) => (
                <Card key={cweb.id}>
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
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CContainer
