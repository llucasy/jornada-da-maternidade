import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: 'pink' }} variant="dark">
      <Container>
        <Navbar.Brand href="#home" style={{ color: '#901414', fontWeight: 'bolder' }}>Jornada da Maternidade</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" style={{ color: '#901414' }}>Features</Nav.Link>
            <Nav.Link href="#pricing" style={{ color: '#901414' }}>Pricing</Nav.Link>
            <Nav.Link href="#pricing" style={{ color: '#901414' }}>Pricing</Nav.Link>
            <Nav.Link href="#pricing" style={{ color: '#901414' }}>Pricing</Nav.Link>
            <Nav.Link href="#pricing" style={{ color: '#901414' }}>Pricing</Nav.Link>
            <Nav.Link href="#pricing" style={{ color: '#901414' }}>Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}