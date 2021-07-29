import "./LoginForm.css"
import { Component } from 'react'
import { Form, Button, Alert, Card } from 'react-bootstrap'
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

        this.authService
            .login(this.state)
            .then(response => {
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
                        <Form.Control className="roundBox" type="text" placeholder="Username" value={this.state.userName} onChange={e => this.handleInputChange(e)} name="userName" />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Control className="roundBox" type="password" placeholder="Password" value={this.state.password} onChange={e => this.handleInputChange(e)} name="password" />
                    </Form.Group>

                    <Button className="roundBox mainButton" style={{ width: '100%' }} variant="outline-dark" type="submit">Log-in</Button>

                </Form>

            </>
        )
    }
}

export default LoginForm


