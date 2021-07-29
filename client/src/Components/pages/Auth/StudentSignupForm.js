import { Component } from 'react'
import './StudentSignupForm.css'
import { Form, Button, Alert, Container, Row, Col, Card } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'

class StudentSignupForm extends Component {

    constructor() {
        super()
        this.state =
        {
            name: '',
            lastName: '',
            age: '',
            description: '',
            course: '',
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
            .completeRegistration(this.state)
            .then(response => {
                this.props.history.push('/profile')
                this.setState({
                    name: '',
                    lastName: '',
                    age: '',
                    description: '',
                    course: '',
                    tutorName: '',
                    tutorLastName: '',
                    personalId: ''
                })
            })
            .catch(err => this.setState({ alert: { show: true, text: err.response.data.message } }))
    }

    render() {


        return (
            <>
                <Container>

                    <Row className="justify-content-center">

                        <Col md={6}>
                            <Card.Body className="singupCard shadow-lg roundBox">
                                <Card.Text>
                                    <Alert show={this.state.alert.show} variant='danger'>{this.state.alert.text}</Alert>

                                    <Form onSubmit={e => this.handleSubmit(e)}>

                                        <Form.Group as={Col} md="4" controlId="name">
                                            <Form.Control placeholder='Name' className='roundBox' type="text" value={this.state.name} onChange={e => this.handleInputChange(e)} name="name" />
                                        </Form.Group>

                                        <Form.Group as={Col} md="4" controlId="lastName">
                                            <Form.Control placeholder='Last Name' className='roundBox' type="text" value={this.state.lastName} onChange={e => this.handleInputChange(e)} name="lastName" />
                                        </Form.Group>

                                        <Form.Group as={Col} md="4" controlId="age">
                                            <Form.Control placeholder='How old are you?' className='roundBox' type="text" value={this.state.age} onChange={e => this.handleInputChange(e)} name="age" />
                                        </Form.Group>

                                        <Form.Group controlId="description">
                                            <Form.Control placeholder='How would you describe yourself?' className='roundBox' type="text" value={this.state.description} onChange={e => this.handleInputChange(e)} name="description" />
                                        </Form.Group>

                                        <Form.Group controlId="course">
                                            <Form.Control placeholder='Which is your course?' className='roundBox' type="text" value={this.state.course} onChange={e => this.handleInputChange(e)} name="course" />
                                        </Form.Group>

                                        <Form.Group as={Col} md="4" controlId="tutorName" class="collapse multi-collapse" id="multiCollapseExample1">
                                            <Form.Control placeholder='Legal Tutor Name' className='roundBox' type="text" value={this.state.tutorName} onChange={e => this.handleInputChange(e)} name="tutorName" />
                                        </Form.Group>

                                        <Form.Group as={Col} md="4" controlId="tutorLastName">
                                            <Form.Control placeholder='Legal Tutor Last Name' className='roundBox' type="text" value={this.state.tutorLastName} onChange={e => this.handleInputChange(e)} name="tutorLastName" />
                                        </Form.Group>

                                        <Form.Group as={Col} md="4" controlId="personalId">
                                            <Form.Control placeholder='Legal Tutor Personal ID' className='roundBox' type="text" value={this.state.personalId} onChange={e => this.handleInputChange(e)} name="personalId" />
                                        </Form.Group>

                                        <Button className='roundBox mainButton' variant="dark" type="submit">Complete your registration</Button>

                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default StudentSignupForm


