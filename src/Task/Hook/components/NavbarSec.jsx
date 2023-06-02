import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavbarSec = () => {
  const style = {
    backgroundColor: '#0ef10e'
  }

  return (
    <div style={style}>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Technology News</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarSec;