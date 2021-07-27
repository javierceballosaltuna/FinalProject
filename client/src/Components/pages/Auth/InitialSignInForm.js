import { Component } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'

class InitialSignupForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            email: '',
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


    handleSubmit(e) {

        e.preventDefault()

        this.authService
            .studentSignup(this.state)
            .then(() => {
                this.props.history.push('/complete-registration')
                this.props.handleAlert(`Welcome back, ${this.state.userName}`)
            })
            .catch(err => {
                this.setState({ alert: { show: true, text: err.response.data.message } })
            })
    }

    render() {
        return (
            <>
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

                    <Button variant="outline-dark" style={{ width: '100%', marginTop: '20px' }} type="submit">Sign-up</Button>
                </Form>
            </>
        )
    }
}

export default InitialSignupForm