import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar className="mb-5" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <span className="logo">Webcam App</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
