import './Navigation.css'
import AuthService from '../../services/auth.service'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import logo from '../../assets/Images/logo.png'

const Navigation = ({ loggedUser, storeUser }) => {

    const logout = () => {
        const authService = new AuthService()
        authService
            .logout()
            .then(() => {

                storeUser(undefined)
                this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    return (

        <>
            <Navbar expand="lg" className="fullNavBar navbar justify-items-center">
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="logo" style={{ width: '50px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {loggedUser ? <NavDropdown title="Events" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/events/group-sessions">Group Events</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/events/individual-sessions">Individual Events</NavDropdown.Item>
                        </NavDropdown> : null}
                        {loggedUser && loggedUser.role === 'student' ? <Nav.Link as={Link} to="/subjects">Subjects</Nav.Link> : null}
                        {loggedUser ? <Nav.Link as={Link} to="/profile">Profile</Nav.Link> : null}
                        <NavDropdown title="Session" id="basic-nav-dropdown">
                            {/* {loggedUser && loggedUser.role === ('student' || 'teacher') && <NavDropdown.Item as={Link} to="/profile">My profile</NavDropdown.Item>} */}
                            {loggedUser && loggedUser.role === 'admin' && <NavDropdown.Item as={Link} to="/admin">Admin</NavDropdown.Item>}
                            {!loggedUser ? <NavDropdown.Item as={Link} to="/">Login</NavDropdown.Item> : null}
                            {!loggedUser ? <NavDropdown.Item as={Link} to="/">Sign up</NavDropdown.Item> : null}
                            <NavDropdown.Divider />
                            {loggedUser ? <NavDropdown.Item onClick={() => logout()}>Log out</NavDropdown.Item> : null}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </>
    )
}
export default Navigation