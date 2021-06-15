import { Card, Button, ListGroupItem, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const WebcamItem = ({ webcam }) => {
  return (
    <>
      <Card>
        <Link to={`/webcam/${webcam.id}`}>
          <Card.Img variant="top" src={webcam.image.current.preview} />
        </Link>
        <Card.Body>
          <Link to={`/webcam/${webcam.id}`}>
            <Card.Title>
              <span className="card-link-font">{webcam.title}</span>
            </Card.Title>
          </Link>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h6>
                {webcam.location.city}, {webcam.location.country}
              </h6>
            </ListGroupItem>
            <ListGroupItem>
              <Card.Text>{webcam.status}</Card.Text>
            </ListGroupItem>
          </ListGroup>

          <Link to={`/webcam/${webcam.id}`}>
            <Button variant="light">See more</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  )
}

export default WebcamItem
