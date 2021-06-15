import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withRouter, Link } from 'react-router-dom'
import {
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
  Spinner,
  Button,
} from 'react-bootstrap'

const REACT_APP_RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY

const Webcam = ({ match }) => {
  const [webcams, setWebcams] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    // console.log(match.params.id)
    const options = {
      method: 'GET',
      url: `https://webcamstravel.p.rapidapi.com/webcams/list/webcam=${match.params.id}`,
      params: { lang: 'en', show: 'webcams:image,location' },
      headers: {
        'x-rapidapi-key': REACT_APP_RAPID_API_KEY,
        'x-rapidapi-host': 'webcamstravel.p.rapidapi.com',
      },
    }

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.result.webcams)
        setWebcams(response.data.result.webcams)
        setLoading(false)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [match])

  if (loading) {
    return <Spinner className="spinner" animation="grow" variant="info" />
  }

  return (
    <>
      <Container>
        <Link to="/">
          {' '}
          <Button className="my-3" variant="light">
            Go back
          </Button>
        </Link>

        {/* {console.log(webcams[0] ? webcams[0].title : null)} */}

        <Row className="">
          <Col>
            <div className="text-center">
              <h3 className="title-font my-3">
                {webcams[0] ? webcams[0].title : null}
              </h3>
              <h5 className="text-uppercase  my-3">
                {webcams[0] ? webcams[0].status : null}
              </h5>
            </div>
          </Col>
        </Row>
        <Row className="webcam-container">
          <Col className="">
            <Card>
              <Card.Img
                variant="top"
                src={webcams[0] ? webcams[0].image.current.preview : null}
              />
              <Card.Text>
                <h4 className="text-center text-uppercase my-4">(Current)</h4>
              </Card.Text>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    <h3>Location</h3>
                    <h4>
                      {webcams[0] ? webcams[0].location.city : null},{' '}
                      {webcams[0] ? webcams[0].location.country : null}{' '}
                      {webcams[0] ? webcams[0].location.continent_code : null}
                    </h4>
                  </ListGroupItem>
                  <ListGroupItem>
                    <h3 className="my-2">Region</h3>
                    <h4>{webcams[0] ? webcams[0].location.region : null}</h4>
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={webcams[0] ? webcams[0].image.daylight.preview : null}
              />
              <Card.Text>
                {' '}
                <h4 className="text-center text-uppercase my-4">(Daylight)</h4>
              </Card.Text>
              <Card.Body>
                <ListGroup variant="flush">
                  <h3>Longitude / Latitude</h3>
                  <ListGroupItem>
                    {' '}
                    <h4>
                      {webcams[0] ? webcams[0].location.latitude : null},{' '}
                      {webcams[0] ? webcams[0].location.longitude : null}
                    </h4>
                  </ListGroupItem>
                  <ListGroupItem>
                    <h4 className="my-3">Links</h4>
                    <a
                      href={webcams[0] ? webcams[0].location.wikipedia : null}
                      className="my-3"
                      target="_blank"
                      rel="noreferrer">
                      {webcams[0] ? webcams[0].location.wikipedia : null}
                    </a>
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default withRouter(Webcam)
