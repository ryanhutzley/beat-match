import { Link, NavLink } from 'react-router-dom'
import { Navbar, Container, Nav, NavItem } from "react-bootstrap"
import { useHistory } from 'react-router-dom'

function NavBar({ user, logOut }) {

    function handleLogout(e) {
        if (user) {
            logOut()
        }
    }

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
                        <Nav.Link as={Link} onClick = {handleLogout} to="/login" >
                        {user ? "Logout" : "Login"}
                        </Nav.Link>
                    </Nav>
                </Container>
            <h3 style={{'fontSize': 'medium'}}>
                {user ? `Welcome, ${user.username}` : null}
            </h3>
            </Navbar>
        </header>
    )
}

export default NavBar