import './Navigation.css'
import AuthService from '../../services/auth.service'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/Images/logo.png'

const Navigation = ({ loggedUser, storeUser }) => {

    const logout = () => {
        const authService = new AuthService()
        authService
            .logout()
            .then(() => {
                storeUser(undefined)
            })
            .catch(err => console.log(err))
    }

    return (

        <>
            <Navbar expand="lg" className="fullNavBar navbar justify-items-center">
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="logo" style={{ width: '50px' }}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/events/group-sessions">Events</Nav.Link>
                        <Nav.Link as={Link} to="/subjects">Subjects</Nav.Link>
                        <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
                        <NavDropdown title="Profile" id="basic-nav-dropdown">
                            {loggedUser && loggedUser.role === ('student' || 'teacher') && <NavDropdown.Item as={Link} to="/profile">My profile</NavDropdown.Item>}
                            {loggedUser && loggedUser.role === 'admin' && <NavDropdown.Item as={Link} to="/admin">Admin</NavDropdown.Item>}
                            <NavDropdown.Item as={Link} to="/">Login</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/">Sign up</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => logout()}>Log out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </>
    )
}
export default Navigation