import { Component } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'


class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            alert: {
                show: false,
                text: ' '
            }
        }
        this.authService = new AuthService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleSubmit = e => {
        e.preventDefault()

        const { userName, password } = this.state

        this.authService
            .login(userName, password)
            .then(response => {
                console.log(response)
                this.props.storeUser(response.data)
                this.props.history.push('/profile')
            })
            .catch(err => console.log(err))
        // .catch(err => this.setState({ alert: { show: true, text: err } }))
    }

    render() {
        return (
            <>
                <Alert show={this.state.alert.show} variant='danger'>{this.state.alert.text}</Alert>

                <Form onSubmit={this.handleSubmit}>

                    <Form.Group controlId="userName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={this.state.userName} onChange={e => this.handleInputChange(e)} name="userName" />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={this.state.password} onChange={e => this.handleInputChange(e)} name="password" />
                    </Form.Group>

                    <Button style={{ marginTop: '20px', width: '100%' }} variant="outline-dark" type="submit">Log-In</Button>

                </Form>
            </>
        )
    }
}

export default LoginForm


