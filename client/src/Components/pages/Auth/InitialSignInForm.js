import { Component } from 'react'
import { Form, Button, Alert, Modal } from 'react-bootstrap'
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
                teacherButtonClassName: 'undefined',
                studentButtonClassName: 'undefined'
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
            button: { teacherButtonClassName: 'selectedButton', studentButtonClassName: 'undefined' }
        })
    }

    isTeacher = () => {
        this.setState({
            role: 'teacher',
            button: { studentButtonClassName: 'selectedButton', teacherButtonClassName: 'undefined' }
        })

    }


    handleSubmit(e) {

        e.preventDefault()

        if (this.state.role === 'teacher') {
            this.authService
                .teacherSignup(this.state)
                .then(() => {
                    this.props.history.push('/complete-registration')
                    this.props.handleAlert(`Welcome, ${this.state.userName}`)
                })
                .catch(err => {
                    this.setState({ alert: { show: true, text: err.response.data.message }})
                })

        } else if (this.state.role === 'student') {
            this.authService
                .studentSignup(this.state)
                .then(() => {
                    this.props.history.push('/complete-registration')
                    this.props.handleAlert(`Welcome, ${this.state.userName}`)
                })
                .catch(err => { this.setState({ alert: { show: true, text: err.response.data.message } }) })
        }
    }


    render() {
        return (

            <>

                <Modal.Header className="justify-content-around">

                    <Button className={this.state.button.studentButtonClassName} onClick={this.isTeacher} style={{ marginTop: '20px' }} variant="outline-dark" type="submit">I'm a teacher</Button>

                    <Button className={this.state.button.teacherButtonClassName} onClick={this.isStudent} style={{ marginTop: '20px' }} variant="outline-dark" type="submit">I'm a student</Button>

                </Modal.Header>

                <Modal.Body>

                    <Alert show={this.state.alert.show} variant='danger'>{this.state.alert.text}</Alert>

                    <Form onSubmit={e => this.handleSubmit(e)}>

                        <Form.Group controlId="userName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" value={this.state.userName} onChange={e => this.handleInputChange(e)} name="userName" />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={this.state.password} onChange={e => this.handleInputChange(e)} name="password" />
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={this.state.email} onChange={e => this.handleInputChange(e)} name="email" />
                        </Form.Group>

                        <Button variant="outline-dark" style={{ width: '100%', marginTop: '20px', marginBottom: '30px' }} type="submit">Sign-up</Button>

                    </Form>

                </Modal.Body>

            </>
        )
    }
}

export default InitialSignupForm