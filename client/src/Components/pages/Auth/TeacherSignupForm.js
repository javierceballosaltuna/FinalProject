import { Component } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'

class TeacherSignupForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            lastName: '',
            age: '',
            description: '',
            avatar: '',
            subject: '',
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
            .completeRegistration(this.state)
            .then(response => {
                this.props.history.push('/complete-registration')
                this.setState(response.data)
            })
            .catch(err =>  this.setState({ alert: { show: true, text: err.response.data.message } }))
    }

    render() {
        return (
            <>
                <Alert show={this.state.alert.show} variant='danger'>{this.state.alert.text}</Alert>

                <Form onSubmit={e => this.handleSubmit(e)}>

                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={e => this.handleInputChange(e)} name="name" />
                    </Form.Group>

                    <Form.Group controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" value={this.state.lastName} onChange={e => this.handleInputChange(e)} name="lastName" />
                    </Form.Group>

                    <Form.Group controlId="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" value={this.state.age} onChange={e => this.handleInputChange(e)} name="age" />
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>How would you describe yourself?</Form.Label>
                        <Form.Control type="text" value={this.state.description} onChange={e => this.handleInputChange(e)} name="description" />
                    </Form.Group>

                    <Form.Group controlId="avatar">
                        <Form.Label>Please, upload your avatar</Form.Label>
                        <Form.Control type="text" value={this.state.avatar} onChange={e => this.handleInputChange(e)} name="avatar" />
                    </Form.Group>

                    <Form.Group controlId="subject">
                        <Form.Label>What kind of subjects do you want to teach?</Form.Label>
                        <Form.Control type="text" value={this.state.subject} onChange={e => this.handleInputChange(e)} name="subject" />
                    </Form.Group>

                    <Button variant="dark" type="submit">Complete your teacher registration</Button>

                </Form>
            </>
        )
    }
}

export default TeacherSignupForm


