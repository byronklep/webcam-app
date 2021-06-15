import React from 'react'
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DD from './DD'

const CContainer = ({ location }) => {
  console.log(location.state.cData[0].location.continent)
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
            <h1 className="text-center mb-5 title-font">
              {location.state.cData[0].location.continent}
            </h1>
            <div className="cards">
              {dataItems.map((cweb) => (
                <>
                  <Card key={cweb.id}>
                    <Link to={`/webcam/${cweb.id}`}>
                      <Card.Img
                        variant="top"
                        src={cweb.image.current.preview}
                      />
                    </Link>
                    <Card.Body>
                      <Link to={`/webcam/${cweb.id}`}>
                        <Card.Title>
                          <span className="title-font">{cweb.title}</span>
                        </Card.Title>
                      </Link>
                      <ListGroup variant="flush">
                        <ListGroupItem>
                          <h6>
                            {cweb.location.city}, {cweb.location.country}
                          </h6>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Card.Text>{cweb.status}</Card.Text>
                        </ListGroupItem>
                      </ListGroup>
                      <Link to={`/webcam/${cweb.id}`}>
                        <Button variant="light">See more</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CContainer
