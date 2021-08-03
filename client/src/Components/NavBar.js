import { Link, NavLink } from 'react-router-dom'
import { Navbar, Container, Nav, NavItem } from "react-bootstrap"

function NavBar({ user }) {
    return (
        <header>
            <Navbar className="navbar" expand="lg" variant="primary">
                <Navbar.Brand> BeatMatch </Navbar.Brand>
                <Container id="navbar">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                        Swipe
                        </Nav.Link>
                        <Nav.Link as={Link} to="/matches">
                        Matches
                        </Nav.Link>
                        <Nav.Link as={Link} to="/profile">
                        Profile
                        </Nav.Link>
                        <Nav.Link as={Link} to="/login" >
                        Login
                        </Nav.Link>
                        <Nav.Link as={Link} to="/login" >
                        Login
                        </Nav.Link>
                        <p></p>
                        
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar