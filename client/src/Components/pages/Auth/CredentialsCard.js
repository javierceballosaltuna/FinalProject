import './CredentialsCard.css'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { Component } from 'react'
import LoginForm from './LoginForm'
import InitialSignInForm from './InitialSignInForm'
import logo from './../../../assets/Images/logo_title.png'


class CredentialsCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }
    }

    render() {

        return (

            <Container>

                <Row className="justify-content-center">

                    <Col md={6}>

                        <img src={logo} className="loginlogo" alt="logo" style={{ width: 250 }} />

                        <hr />

                        <LoginForm storeUser={this.props.storeUser} history={this.props.history} handleAlert={this.props.handleAlert} />

                        <hr />

                        <Button onClick={() => this.setState({ modal: true })} style={{ marginTop: '20px', width: '100%' }} variant="outline-dark" type="submit">Sign-up</Button>

                        <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                            <Modal.Header className="justify-content-around">
                                <Button style={{ marginTop: '20px'}} variant="outline-dark" type="submit">I'm a teacher</Button>
                                <Button style={{ marginTop: '20px'}} variant="outline-dark" type="submit">I'm a student</Button>
                            </Modal.Header>
                            <Modal.Body>
                                <InitialSignInForm closeModal={() => this.setState({ modal: false })} />
                            </Modal.Body>
                        </Modal>

                    </Col>

                </Row>

            </Container>

        )
    }
}

export default CredentialsCard