import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'
import logo from './../../../assets/Images/logo_transparent.png'


const CredentialsCard = ({ history, handleAlert, storeUser }) => {

    return (

        <Container>

            <Row className="justify-content-center">

                <Col md={6}>

                    <img src={logo} className="rounded mr-2" alt="logo" style={{ width: 250, height: 250 }} />

                    <hr />

                    <LoginForm storeUser={storeUser} history={history} handleAlert={handleAlert} />

                    <hr />

                    <Link to="/signup" className="btn btn-dark">Sign-In as Teacher</Link>

                </Col>

            </Row>

        </Container>

    )
}

export default CredentialsCard