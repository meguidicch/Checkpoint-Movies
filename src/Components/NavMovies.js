
import { Container , Nav , Navbar} from "react-bootstrap"
const NavMovies =() => {
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#Navbar">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Movie App">Movie App</Nav.Link>
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Movies">Movies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default NavMovies