import { Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const WebcamItem = ({ webcam }) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={webcam.image.current.preview} />
        <Card.Body>
          <LinkContainer to={`/webcam/${webcam.id}`}>
            <Card.Title>{webcam.title}</Card.Title>
          </LinkContainer>

          <Card.Text>{webcam.status}</Card.Text>
          <LinkContainer to={`/webcam/${webcam.id}`}>
            <Button variant="light">See more</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </>
  )
}

export default WebcamItem
