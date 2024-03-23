import "./App.css";
import AppRouter from "./Routes";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Favorite, Park } from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar className="navbar">
          <Container>
            <Navbar.Brand href="/">
              <Favorite fontSize="large" style={{color: '#FF4033'}}/>
              <Park fontSize="large" style={{color: '#3A887C'}}/>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/events">Events</Nav.Link>
              <Nav.Link href="/resources">Resources</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <AppRouter />
      </header>
    </div>
  );
}

export default App;
