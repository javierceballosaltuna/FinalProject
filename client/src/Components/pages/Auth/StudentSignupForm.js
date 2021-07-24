import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Alert } from 'react-bootstrap'
import AuthService from '../../../services/auth.services'

class StudentSignupForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            lastName: '',
            age: '',
            description: '',
            course: '',
            interests: '',
            tutorName: '',
            tutorLastName: '',
            personalId: '',
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
            .studentSignup(this.state)
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

                    <Form.Group controlId="course">
                        <Form.Label>Which is your course?</Form.Label>
                        <Form.Control type="text" value={this.state.course} onChange={e => this.handleInputChange(e)} name="course" />
                    </Form.Group>

                    <Form.Group controlId="interests">
                        <Form.Label>Set your interests</Form.Label>
                        <Form.Control type="text" value={this.state.interests} onChange={e => this.handleInputChange(e)} name="interests" />
                    </Form.Group>

                    <Form.Group controlId="tutorName">
                        <Form.Label>Tutor Name</Form.Label>
                        <Form.Control type="text" value={this.state.tutorName} onChange={e => this.handleInputChange(e)} name="tutorName" />
                    </Form.Group>

                    <Form.Group controlId="tutorLastName">
                        <Form.Label>Tutor Last Name</Form.Label>
                        <Form.Control type="text" value={this.state.tutorLastName} onChange={e => this.handleInputChange(e)} name="tutorLastName" />
                    </Form.Group>

                    <Form.Group controlId="personalId">
                        <Form.Label>Tutor Personal ID</Form.Label>
                        <Form.Control type="text" value={this.state.personalId} onChange={e => this.handleInputChange(e)} name="personalId" />
                    </Form.Group>

                    <Link to="/" className="btn btn-dark">
                    <Button variant="dark" type="submit">Complete your student profile</Button>
                    </Link>

                </Form>
            </>
        )
    }
}

export default StudentSignupForm


