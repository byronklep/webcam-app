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

const Webcam = ({ match }) => {
  const [webcams, setWebcams] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    console.log(match.params.id)
    const options = {
      method: 'GET',
      url: `https://webcamstravel.p.rapidapi.com/webcams/list/webcam=${match.params.id}`,
      params: { lang: 'en', show: 'webcams:image,location' },
      headers: {
        'x-rapidapi-key': 'f53ec3ed8fmsh56cc4f9c74af0edp18b789jsn7fb5469ef1fc',
        'x-rapidapi-host': 'webcamstravel.p.rapidapi.com',
      },
    }

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.result.webcams)
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
    <div>
      <Link to="/">
        {' '}
        <Button>Go back</Button>
      </Link>

      {console.log(webcams[0] ? webcams[0].title : null)}
      <Container>
        <Row>
          <Col className="justify-content-lg-center">
            {/* this.state.tutors[0] ? this.state.tutors[0].email : null */}
            <h3>{webcams[0] ? webcams[0].title : null}</h3>
            <h5>{webcams[0] ? webcams[0].status : null}</h5>
            <Card style={{ width: '36rem' }}>
              <Card.Img
                variant="top"
                src={webcams[0] ? webcams[0].image.current.preview : null}
              />
              <Card.Text>Current</Card.Text>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    {' '}
                    <h4>
                      {webcams[0] ? webcams[0].location.city : null},{' '}
                      {webcams[0] ? webcams[0].location.country : null}{' '}
                      {webcams[0] ? webcams[0].location.continent_code : null}
                    </h4>
                  </ListGroupItem>
                  <ListGroupItem>
                    {' '}
                    <h4>{webcams[0] ? webcams[0].location.region : null}</h4>
                  </ListGroupItem>
                  <ListGroupItem>
                    {' '}
                    <h4>
                      {webcams[0] ? webcams[0].location.latitude : null},{' '}
                      {webcams[0] ? webcams[0].location.longitude : null}
                    </h4>
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
            <Card style={{ width: '36rem' }}>
              <Card.Img
                variant="top"
                src={webcams[0] ? webcams[0].image.daylight.preview : null}
              />
              <Card.Text>Daylight</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default withRouter(Webcam)
