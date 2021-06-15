import { Container, Row, Col } from 'react-bootstrap'

const AboutPage = () => {
  return (
    <>
      <Container className="text-center">
        <Row>
          <Col>
            <h1 className="title-font mt-5">About</h1>
            <p>Webcam App</p>
            <p>V 1.0.0</p>
            <p>Contact: </p>
            <a
              href="mailto:sam@samklepper.com"
              target="_blank"
              rel="noreferrer">
              sam@samklepper.com
            </a>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AboutPage
