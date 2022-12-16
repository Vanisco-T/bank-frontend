import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarLog() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Vanis Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"></Nav.Link>
            <Nav.Link href="/"></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="/transfer">Transfer</Nav.Link>
            <Nav.Link eventKey={3} href="/transaction">Your Transaction</Nav.Link>
            <Nav.Link eventKey={2} href="/deposit">Deposit</Nav.Link>
            <Nav.Link eventKey={2} href="/">Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLog;