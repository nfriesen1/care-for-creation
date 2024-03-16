import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light" >
    <Container >
      <Navbar.Brand href="/home">Care for Creation</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/events">Event</Nav.Link>
        <Nav.Link href="/resources">Resources</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default NavBar;