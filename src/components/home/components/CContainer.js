import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DD from './DD'

const CContainer = ({ location }) => {
  console.log(location.state.cData)
  const dataItems = location.state.cData
  // const selectedItems = location
  // console.log(location.pathname)
  return (
    <>
      <Container>
        <Row>
          <Col>
            <DD />
          </Col>
        </Row>
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
                  <Link to={`/webcam/${cweb.id}`}>
                    <Card.Img variant="top" src={cweb.image.current.preview} />
                  </Link>
                  <Card.Body>
                    <Link to={`/webcam/${cweb.id}`}>
                      <Card.Title>{cweb.title}</Card.Title>
                    </Link>

                    <Card.Text>{cweb.status}</Card.Text>
                    <Link to={`/webcam/${cweb.id}`}>
                      <Button variant="light">See more</Button>
                    </Link>
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
