import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'
// import StudentSignupForm from './StudentSignupForm'
// import TeacherSignupForm from './TeacherSignupForm'


const CredentialsCard = ({ history, handleAlert }) => {

    return (

        <Container>

            <Row className="justify-content-center">

                <Col md={6}>

                    <h1>LOGO</h1>

                    <hr />

                    <LoginForm history={history} handleAlert={handleAlert} />

                    <hr />
                    <Link to="/" className="btn btn-dark"> Log-In</Link>

                    {/* <StudentSignupForm history={history} handleAlert={handleAlert} />

                    <TeacherSignupForm history={history} handleAlert={handleAlert} /> */}

                </Col>

            </Row>

        </Container>

    )
}

export default CredentialsCard