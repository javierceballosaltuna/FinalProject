import { Component } from 'react'
import { Form, Button, Alert, Modal, Container, Row, Col } from 'react-bootstrap'
import './InitialSignInForm.css'
import AuthService from '../../../services/auth.service'

class InitialSignupForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            email: '',
            role: 'undefined',
            button: {
                teacherButtonClassName: 'mainButton',
                studentButtonClassName: 'mainButton'
            },
            alert: {
                show: false,
                text: ' '
            }
        }
        this.authService = new AuthService()
    }


    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    isStudent = () => {
        this.setState({
            role: 'student',
            button: { teacherButtonClassName: 'roleButton', studentButtonClassName: 'mainButton' }
        })
    }

    isTeacher = () => {
        this.setState({
            role: 'teacher',
            button: { studentButtonClassName: 'roleButton', teacherButtonClassName: 'mainButton' }
        })

    }


    handleSubmit(e) {

        e.preventDefault()

        if (this.state.role === 'teacher') {
            this.authService
                .teacherSignup(this.state)
                .then((res) => {
                    this.props.storeUser(res.data)
                    this.props.history.push('/complete-registration')
                    this.props.handleAlert(`Welcome, ${this.state.userName}`)
                })
                .catch(err => {
                    this.setState({ alert: { show: true, text: err.response.data.message } })
                })

        } else if (this.state.role === 'student') {
            this.authService
                .studentSignup(this.state)
                .then((res) => {
                    this.props.storeUser(res.data)
                    this.props.history.push('/complete-registration')
                    this.props.handleAlert(`Welcome, ${this.state.userName}`)
                })
                .catch(err => { this.setState({ alert: { show: true, text: err.response.data.message } }) })
        }
    }


    render() {
        return (

            <>
                <Container>

                    <Row className="justify-content-center">

                        <Col md={10}>
                        
                            <Modal.Header className="justify-content-around">

                                <Button className={`roundBox ${this.state.button.studentButtonClassName}`} onClick={this.isTeacher} style={{ marginTop: '20px' }} variant="outline-dark" type="submit">I'm a teacher</Button>

                                <Button className={`roundBox ${this.state.button.teacherButtonClassName}`} onClick={this.isStudent} style={{ marginTop: '20px' }} variant="outline-dark" type="submit">I'm a student</Button>

                            </Modal.Header>

                            <Modal.Body>

                                <Alert show={this.state.alert.show} variant='danger'>{this.state.alert.text}</Alert>

                                <Form onSubmit={e => this.handleSubmit(e)}>

                                    <Form.Group controlId="userName">
                                        <Form.Control type="text" placeholder='Username' className='roundBox' value={this.state.userName} onChange={e => this.handleInputChange(e)} name="userName" />
                                    </Form.Group>

                                    <Form.Group controlId="password">
                                        <Form.Control type="password" placeholder='Password' className='roundBox' value={this.state.password} onChange={e => this.handleInputChange(e)} name="password" />
                                    </Form.Group>

                                    <Form.Group controlId="email">
                                        <Form.Control type="email" placeholder='Email' className='roundBox' value={this.state.email} onChange={e => this.handleInputChange(e)} name="email" />
                                    </Form.Group>

                                    <Button className="roundBox mainButton" variant="outline-dark" style={{ width: '100%', marginTop: '20px', marginBottom: '30px' }} type="submit">Get Started</Button>

                                </Form>

                            </Modal.Body>
                        </Col>

                    </Row>

                </Container>

            </>
        )
    }
}

export default InitialSignupForm