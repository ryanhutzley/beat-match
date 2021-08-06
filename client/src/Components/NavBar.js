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
            <Navbar className="navbar"  variant="primary" sticky = "top" >
                <Container className="container-fluid" id="navbar">
                <Navbar.Brand> BeatMatch </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="link" as={Link} to="/">
                        Swipe
                        </Nav.Link>
                        <Nav.Link className="link" as={Link} to="/matches">
                        Matches
                        </Nav.Link>
                        <Nav.Link className="link" as={Link} to="/profile">
                        Profile
                        </Nav.Link>
                        <Nav.Link className="link" as={Link} to="/feed">
                        Feed
                        </Nav.Link>
                        <Nav.Link className="link" as={Link} onClick = {handleLogout} to="/login" >
                        {user ? "Logout" : "Login"}
                        </Nav.Link>
                    </Nav>
                </Container>
            <div>
                <h3 style={{'fontSize': 'medium'}}>
                    {user ? `Welcome, ${user.username}` : null}
                </h3>
                <img src={user.image_url} alt="profile pic" style={{width: '40px', height: '30px'}} />
            </div>
            </Navbar>
        </header>
    )
}

export default NavBar