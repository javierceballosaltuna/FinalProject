import { Component } from 'react'

import { Form, Button, Alert } from 'react-bootstrap'
import AuthService from '../../../services/auth.services'

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
        this.AuthService = new AuthService()
    }


    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleSubmit(e) {
        e.preventDefault()
        this.AuthService
            .login(this.state)
            .then(response => {
                this.props.history.push('/')
                this.props.handleAlert(`Hi, ${this.state.userName}.`)
                this.setState(response.data)
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


                    <Button variant="dark" type="submit">Log-In</Button>


                </Form>
            </>
        )
    }
}

export default LoginForm


