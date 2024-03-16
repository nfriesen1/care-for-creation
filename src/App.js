import './App.css';
import AppRouter from './Routes';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Care for Creation</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">Features</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href='/resources'>Resources</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <AppRouter/>
      </header>
    </div>
  );
}

export default App;
