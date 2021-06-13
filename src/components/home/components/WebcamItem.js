import { Card, Button } from 'react-bootstrap'
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
            <Card.Title>{webcam.title}</Card.Title>
          </Link>

          <Card.Text>{webcam.status}</Card.Text>
          <Link to={`/webcam/${webcam.id}`}>
            <Button variant="light">See more</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  )
}

export default WebcamItem
