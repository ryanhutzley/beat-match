import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { useHistory } from 'react-router-dom'
import logo from "../background_logo/logo-normal-5000-round.png"

function NavBar({ user, logOut, setErrors }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    function handleLogout(e) {
        if (user) {
            logOut()
        }
    }

    function handleDropdownClick(e) {
        document.activeElement.blur()
        setErrors([])
    }

    function handleNavLinkClick() {
        setErrors([])
    }

    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))

    return (
        <>
        {windowWidth > 576 ? (
            <header>
            <Navbar className="navbar"  variant="primary" sticky = "top" style={{minWidth: '100vw', minHeight: '10vh'}}>
                <Container className="container-fluid" id="navbar">
                <Navbar.Brand>
                    <img src={logo} width="40" height="40" alt="BeatMatch" />
                </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="link" onClick={handleNavLinkClick} as={Link} to="/">
                        Swipe
                        </Nav.Link>
                        <Nav.Link className="link" onClick={handleNavLinkClick} as={Link} to="/matches">
                        Matches
                        </Nav.Link>
                        <Nav.Link className="link" onClick={handleNavLinkClick} as={Link} to="/profile">
                        Profile
                        </Nav.Link>
                        <Nav.Link className="link" onClick={handleNavLinkClick} as={Link} to="/feed">
                        Feed
                        </Nav.Link>
                        <Nav.Link className="link" as={Link} onClick = {handleLogout} to="/login" >
                        {user ? "Logout" : "Login"}
                        </Nav.Link>
                    </Nav>
                </Container>
                <div style={{display: 'flex', marginRight: '1.5vw', alignItems: 'center'}}>
                    <h3 className='loggedIn' style={{fontSize: 'medium'}}>
                        {user ? `Welcome ${user.username}` : null}
                    </h3>
                    <img src={user.image_url} alt="profile pic" style={{width: '40px', height: '30px'}} />
                </div>
            </Navbar>
        </header> ) : (
            <Navbar className="navbar" variant="primary" sticky="top" style={{minWidth: '100vw', minHeight: '10vh'}}>
                <Container className="container-fluid" id="navbar">
                <Navbar.Brand>
                    <img src={logo} width="40" height="40" alt="BeatMatch" />
                </Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown title="Your Profile" id="basic-nav-dropdown">
                            <NavDropdown.Item className="link" onClick={handleDropdownClick} as={Link} to="/">Swipe</NavDropdown.Item>
                            <NavDropdown.Item className="link" onClick={handleDropdownClick} as={Link} to="/matches">Matches</NavDropdown.Item>
                            <NavDropdown.Item className="link" onClick={handleDropdownClick} as={Link} to="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item className="link" onClick={handleDropdownClick} as={Link} to="/feed">Feed</NavDropdown.Item>
                            <NavDropdown.Item className="link" as={Link} onClick = {handleLogout} to="/login">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
                <div style={{display: 'flex', marginRight: '1.5vw', alignItems: 'center'}}>
                    <h3 className='loggedIn' style={{fontSize: 'medium'}}>
                        {user ? `Welcome ${user.username}` : null}
                    </h3>
                    <img src={user.image_url} alt="profile pic" style={{width: '40px', height: '30px'}} />
                </div>
            </Navbar>
        )}
        </>
    )
}

export default NavBar