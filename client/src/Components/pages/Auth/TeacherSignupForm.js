import { Component } from 'react'
import './TeacherSignupForm.css'
import { Form, Button, Alert, Card, Container, Row, Col } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'
import UploadsService from '../../../services/uploads.service'
import Spinner from '../../shared/Spinner'

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
            },
            loading: false
        }
        this.AuthService = new AuthService()
        this.uploadsService = new UploadsService()
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
                    avatar: '',
                    subject: ''
                })
            })
            .catch(err => console.log('este es el error', err))
    }

    handleFileUpload = e => {

        this.setState({ loading: true })

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        this.uploadsService
            .uploadImage(uploadData)
            .then(response => {
                this.setState({
                    loading: false,
                    avatar: response.data.cloudinary_url
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Container>

                    <Row className="justify-content-center">

                        <Col md={8}>
                            <Card.Body className="singupCard shadow-lg roundBox">
                                <Card.Text>
                                    <Alert show={this.state.alert.show} variant='danger'>{this.state.alert.text}</Alert>

                                    <Form onSubmit={e => this.handleSubmit(e)}>
                                        <Row className="justify-content-center">

                                            <h2 className="text-center formTitle">Complete your Student Profile</h2>

                                            <Col md={4}>
                                                <Form.Group controlId="name">
                                                    <Form.Control placeholder="Name" className="roundBox" type="text" value={this.state.name} onChange={e => this.handleInputChange(e)} name="name" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={4}>
                                                <Form.Group controlId="lastName">
                                                    <Form.Control placeholder="Last Name" className="roundBox" type="text" value={this.state.lastName} onChange={e => this.handleInputChange(e)} name="lastName" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={4}>
                                                <Form.Group controlId="age">
                                                    <Form.Control placeholder="How old are you?" className="roundBox" type="text" value={this.state.age} onChange={e => this.handleInputChange(e)} name="age" />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Form.Group controlId="description">
                                            <Form.Control placeholder="How would you describe yourself?" className="roundBox" as="textarea" value={this.state.description} onChange={e => this.handleInputChange(e)} name="description" />
                                        </Form.Group>
                                        <Form.Group controlId="avatar" className="mb-3 uploadFile">
                                            <Form.Label>Please, upload your avatar:</Form.Label>
                                            <Col>
                                                <Form.Control type="file" onChange={this.handleFileUpload} />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group controlId="subject">
                                            <Form.Control className="roundBox" as="select" value={this.state.subject} name="subject" onChange={e => this.handleInputChange(e)} >
                                                <option selected>What kind of subjects do you want to teach?</option>
                                                <option value="spanish"> Spanish </option>
                                                <option value="math"> Math </option>
                                                <option value="science"> Science </option>
                                                <option value="history"> History </option>
                                                <option value="music"> Music </option>
                                                <option value="volvo"> English </option>
                                                <option value="volvo"> Art </option>
                                                <option value="volvo"> English </option>
                                                <option value="physical education"> Physical Education </option>
                                                <option value="special needs"> Special Needs </option>
                                            </Form.Control>
                                        </Form.Group>

                                        {this.state.loading && <Spinner />}


                                        <Button style={{ width: '100%', marginTop: '20px', marginBottom: '30px' }} className='roundBox mainButton' variant="outline-dark" type="submit" disabled={this.state.loading}>
                                            {this.state.loading ? 'Uploading avatar...' : 'Complete your registration'}
                                        </Button>

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

export default TeacherSignupForm


