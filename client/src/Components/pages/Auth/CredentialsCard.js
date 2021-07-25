import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from './LoginForm'


const CredentialsCard = ({ history, handleAlert }) => {

    return (

        <Container>

            <Row className="justify-content-center">

                <Col md={6}>

                    <h1>LOGO</h1>

                    <hr />

                    <LoginForm history={history} handleAlert={handleAlert} />

                    <hr />

                </Col>

            </Row>

        </Container>

    )
}

export default CredentialsCard