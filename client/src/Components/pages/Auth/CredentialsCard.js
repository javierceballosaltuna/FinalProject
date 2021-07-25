import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from './LoginForm'
import logo from './../../../assets/Images/logo_transparent.png'


const CredentialsCard = ({ history, handleAlert }) => {

    return (

        <Container>

            <Row className="justify-content-center">

                <Col md={6}>

                    <img src={logo} className="rounded mr-2" alt="logo" style={{ width: 250, height: 250 }} />

                    <hr />

                    <LoginForm history={history} handleAlert={handleAlert} />

                    <hr />

                </Col>

            </Row>

        </Container>

    )
}

export default CredentialsCard