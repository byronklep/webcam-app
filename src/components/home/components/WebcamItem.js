import { Card, Button } from 'react-bootstrap'

const WebcamItem = ({ webcam }) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={webcam.image.current.preview} />
        <Card.Body>
          <Card.Title>{webcam.title}</Card.Title>
          <Card.Text>{webcam.status}</Card.Text>
          <Button variant="info">See more</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default WebcamItem
