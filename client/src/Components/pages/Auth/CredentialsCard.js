import './CredentialsCard.css'
import { Container, Row, Col, Button, Modal, Card } from 'react-bootstrap'
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

                    <Col md={4}>
                        <Card.Body className="loginCard shadow-lg roundBox">
                            <Card.Text>

                                <img src={logo} className="loginlogo" alt="logo" style={{ width: 250 }} />


                                {!this.props.loggedUser && <LoginForm storeUser={this.props.storeUser} history={this.props.history} handleAlert={this.props.handleAlert} />}


                                {!this.props.loggedUser &&

                                    <>
                                <hr />
                                    <p className='mainText'>Do you want to join us?</p>
                                    <Button className="roundBox mainButton" onClick={() => this.setState({ modal: true })} style={{ marginTop: '10px', width: '100%', marginBottom: '30px' }} variant="outline-dark" type="submit">Sign-up</Button>

                                        <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                                            <InitialSignInForm closeModal={() => this.setState({ modal: false })} storeUser={this.props.storeUser} history={this.props.history} handleAlert={this.props.handleAlert} />
                                        </Modal>
                                    </>}
                            </Card.Text>
                        </Card.Body>
                    </Col>

                </Row>

            </Container>

        )
    }
}

export default CredentialsCard